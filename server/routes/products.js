import utils from "../utils/utils.js";
import producthelper from "../helper/producthelper.js";
import upload from "../middleware/upload-parser.js";

export default async function (fastify, options, next) {
    //Create a new Products document(Admin API - One time)
    fastify.post("/api/products/new-products-doc", async (request, reply) => {
        //Create New Document
        var data = await utils.createProductsDocument(
            "Products",
            request.body.product_name,
            request.body.unit_price,
            request.body.quantity,
            request.body.product_material,
            request.body.recycling_code,
            request.body.seller_ID,
            request.body.seller_name,
            request.body.product_category,
            request.body.product_sub_category
        );

        reply.send(data);
    });

    //Create New Product
    fastify.post("/api/products/new-product",
        {
            preValidation: [fastify.authentication],
            preHandler: upload.single('file')                        
        },
        async (request, reply) => {

            try {

                let buffer = '';
                let hasBuffer = false;

                if(request.file)
                {
                    buffer = await request.file.buffer;
                    if(buffer)
                    {
                        hasBuffer = true;
                    }
                }

                //Find all available docs
                var docList = await utils.findAllDocs();
                var product_details = [];

                //Get all product details
                const { productID, productRev, productDetails } =
                    producthelper.getAllProducts(docList);

                product_details = producthelper.newProductObj(
                    productDetails,
                    request.body,
                    buffer,
                    hasBuffer
                );

                //Insert updated product details array in products document
                var docInfo = await utils.insertProductInfo(
                    productID,
                    productRev,
                    product_details
                );

                reply.code(201).send(docInfo);
                
            } catch (error) {
                reply.code(500).send(error);
            }            
        }
    );

    // Get All Products
    fastify.get("/api/products", async (request, reply) => {

        try {

            //Find all available docs
            var docList = await utils.findAllDocs();

            //Get all product details
            const { productID, productRev, productDetails } =
                producthelper.getAllProducts(docList);

            reply.code(200).send(productDetails);
            
        } catch (error) {
            reply.code(500).send(error);
        }
        
    });

    //Update Existing Product (Admin can use this to approve a product)
    fastify.post("/api/products/update-product",
        {
            preValidation: [fastify.authentication],
        },
        async (request, reply) => {

            try {

                var productObj = await producthelper.updateProductHelper(request.body);

                reply.send(productObj);
                
            } catch (error) {

                reply.code(500).send(error);
                
            }            
        }
    );

    // Get Product Info
    fastify.post("/api/products/product-info", async (request, reply) => {

        try {
            var product_ID = request.body.product_ID;
            var product_details = await producthelper.getProductInfoHelper(product_ID);

            reply.code(200).send(product_details);
        } catch (error) {
            reply.code(500).send(error);
        }        
    });

    // Search product
    fastify.post("/api/products/search-product", async (request, reply) => {

        try {

            const {product_name, product_category, product_sub_category} = request.body;
            let product_details = await producthelper.searchProductsHelper(product_name,product_category,product_sub_category);

            reply.code(200).send(product_details);
            
        } catch (error) {
            reply.code(500).send(error);
        }        
    });

    // Get Seller Listings
    fastify.post("/api/products/seller-listings",
        {
            preValidation: [fastify.authentication],
        },
        async (request, reply) => {

            try {

                //Find all available docs
                var docList = await utils.findAllDocs();

                var seller_ID = request.body.seller_ID;
                var product_details = [];

                if (
                    docList != null &&
                    docList.data != null &&
                    docList.data.total_rows > 0
                ) {
                    docList.data.rows.forEach((element) => {
                        //Extract information from Products document
                        if (element.doc.type == "Products") {
                            element.doc.product_details.forEach((product) => {
                                if (product.seller_ID == seller_ID) {
                                    product_details.push(product);
                                }
                            });
                        }
                    });
                }

                reply.code(200).send(product_details);
                
            } catch (error) {
                reply.code(500).send(error);
            }            
        }
    );

    next();
}
