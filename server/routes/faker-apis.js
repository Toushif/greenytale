import faker from "faker";
import { v1 as uuid } from "uuid";
import { newUserSchema } from "../schema/users.js";
import utils from "../utils/utils.js";
import producthelper from "../helper/producthelper.js";
import upload from "../middleware/upload-parser.js";


export default async function (fastify, options, next) {

    fastify.get("/api/users/faker-sign-up",
        newUserSchema,
        async (request, reply) => {
            const isAdmin = false;

            //Find all available docs
            let docList = await utils.findAllDocs();

            let id = "";
            let rev = "";
            let user_details = [];

            if (
                docList != null &&
                docList.data != null &&
                docList.data.total_rows > 0
            ) {
                docList.data.rows.forEach((element) => {
                    //Extract information from Users document
                    if (element.doc.type == "Users") {
                        id = element.id;
                        rev = element.doc._rev;
                        user_details = element.doc.user_details;
                    }
                });
            }

            for( let i = 0; i< 500; i++)
            {
                //Create new user object
                let UserObj = {
                    user_ID: uuid(),
                    user_name: faker.internet.userName(),
                    password: faker.internet.password(),
                    email: faker.internet.email(),
                    full_name: faker.name.findName(),
                    dob: "01/01/1905",
                    gender: faker.name.gender(),
                    secure_login_recovery: [
                        {
                            security_question_ID: 1,
                            secure_answer: "Kolkata"
                        }
                    ],
                    role: ["CONSUMER", "SELLER", "EXTERNAL", "ADMIN"].map(
                        (v, i) => {
                            return {
                                RoleID: i + 1,
                                Name: v,
                                GroupName: "GreenProductionInternalTest",
                                Precedence: "2",
                                CreatedTime: new Date().toISOString(),
                                UpdatedTime: new Date().toISOString(),
                                AppCustomer: "GREENYTALE",
                                ActiveStatus: !!isAdmin,
                            };
                        }
                    ),
                    street_address_1: faker.address.streetAddress(),
                    street_address_2: faker.address.secondaryAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zip: faker.address.zipCode(),
                    country: faker.address.country(),
                    sold_product_ID: [],
                    created_dt: new Date().toISOString(),
                    updated_dt: new Date().toISOString()                
                };

                //Modifiy existing User_Details array from document
                user_details.push(UserObj);
            }           

            //Insert updated user details array in Users document
            let docInfo = await utils.insertUserInfo(id, rev, user_details);

            reply.code(201).send(docInfo);
        }
    );

    //Create New Product
    fastify.get("/api/products/faker-new-product",
        {
            preValidation: [fastify.authentication],
            preHandler: upload.single('file')                        
        },
        async (request, reply) => {

            console.log('request.body', request.body)

            //let buffer = await request.file.buffer;

            //Find all available docs
            var docList = await utils.findAllDocs();

            //Get all product details
            const { productID, productRev, productDetails } =
                producthelper.getAllProducts(docList);

            for( let i = 0; i< 450; i++)
            {
                //Create new product object
                let productObj = {
                    product_ID: uuid(),
                    product_name: faker.commerce.productName(),
                    unit_price: faker.commerce.price(),
                    quantity: "100",
                    product_material: faker.commerce.productMaterial(),
                    recycling_code: "#70 GL",
                    seller_ID: "7dcd3d40-eea1-11eb-b87c-119e6b87510a",
                    seller_name: "Nitish Kumar",
                    product_category: faker.commerce.department(),
                    product_sub_category: faker.commerce.product(),
                    isApproved: true,
                    image_buffer: {},
                    created_dt: new Date().toISOString(),
                    updated_dt: new Date().toISOString()
                };

                //Modifiy existing product_Details array from document
                productDetails.push(productObj);
            } 

            console.log('productDetails', productDetails.length)

            //Insert updated product details array in products document
            var docInfo = await utils.insertProductInfo(
                productID,
                productRev,
                productDetails
            );

            reply.code(201).send(docInfo);
        }
    );

    next();
}