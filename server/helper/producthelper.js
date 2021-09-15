import {v1 as uuidv1} from 'uuid';
import utils from '../utils/utils.js';

const producthelper = {

    getAllProducts: function getAllProducts(docList) {
        let id = '';
        let rev = '';
        let product_details = [];
      
        if(docList != null && docList.data != null && docList.data.total_rows > 0)
        {
          docList.data.rows.forEach(element => {
      
            //Extract information from Products document
            if(element.doc.type == 'Products')
            {
              id = element.id;
              rev = element.doc._rev;
              product_details = element.doc.product_details;
            }
          });
        }
        return {
            productID: id,
            productRev: rev,
            productDetails: product_details
        };
    },

    newProductObj: function newProductObj(product_details, request, buffer, hasBuffer) {
        //Create new product object
        var newProductObj = {
            'product_ID': uuidv1(),
            ...request,
            'isApproved' : false,
            'image_buffer': hasBuffer ? buffer : '',
            'created_dt': new Date().toISOString(),
            'updated_dt': new Date().toISOString()
        };
        
        //Modifiy existing User_Details array from document
        product_details.push(newProductObj);
        
        return product_details;
    },

    updateProductHelper: async function updateProductHelper(request) {
      //Find all available docs
      var docList = await utils.findAllDocs();
    
      let prod_ID = request.product_ID;  
      let product_details = [];
      let productObj = {};
      
      //Get all product details
      const {productID, productRev, productDetails} = producthelper.getAllProducts(docList);

      product_details = productDetails;
  
      product_details.forEach(product => {
          if(product.product_ID == prod_ID) {
              product = utils.mapProductUpdateToModel(product, request);
              productObj = product;
          }         
      });
  
      //Insert updated product details array in Products document
      var docInfo = await utils.insertProductInfo(productID, productRev, product_details);

      return productObj;
    },

    getProductInfoHelper: async function getProductInfoHelper(product_ID) {
      //Find all available docs
      var docList = await utils.findAllDocs();
      var product_details = {};

      if (
          docList != null &&
          docList.data != null &&
          docList.data.total_rows > 0
      ) {
          docList.data.rows.forEach((element) => {
              //Extract information from Products document
              if (element.doc.type == "Products") {
                  element.doc.product_details.forEach((product) => {
                      if (product.product_ID == product_ID) {
                          product_details = product;
                      }
                  });
              }
          });
      }

      return product_details;
    },

    searchProductsHelper: async function searchProductsHelper(product_name, product_category, product_sub_category) {
        //Find all available docs
        var docList = await utils.findAllDocs();
        let product_details = [];

        product_name = product_name || null;
        product_category = product_category || null;
        product_sub_category = product_sub_category || null;
  
        if (
            docList != null &&
            docList.data != null &&
            docList.data.total_rows > 0
        ) {
            docList.data.rows.forEach((element) => {
                //Extract information from Products document
                if (element.doc.type == "Products") {
                    element.doc.product_details.forEach((product) => {
                        if (
                            (product.product_name.toLowerCase().includes(product_name.toLowerCase()) || product_name.toLowerCase().includes(product.product_name.toLowerCase()))
                            || (product.product_category.toLowerCase().includes(product_category.toLowerCase()) || product_category.toLowerCase().includes(product.product_category.toLowerCase()))
                            || (product.product_sub_category.toLowerCase().includes(product_sub_category.toLowerCase()) || product_sub_category.toLowerCase().includes(product.product_sub_category.toLowerCase()))) {
                            product_details.push(product);
                        }
                    });
                }
            });
        }
  
        return product_details;
      }
}

export default producthelper