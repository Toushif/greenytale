// Load the Cloudant library.
import Cloudant from '@cloudant/cloudant';

//Load UUID
import {v1 as uuidv1, v4 as uuidv4} from 'uuid';

// Load the Cloudant service config.
import vcap from '../cloudant-config/vcap-local.js';

// Get account details from environment variables
var url = vcap.services.cloudantNoSQLDB.credentials.url;
var username = vcap.services.cloudantNoSQLDB.credentials.username;
var password = vcap.services.cloudantNoSQLDB.credentials.password;

// Initialize the library with url and credentials.
var cloudant = Cloudant({ url: url, username: username, password: password });

const utils = {
    //Function to map update-user req to model
    mapUserUpdateToModel: function mapUserUpdateToModel(user, request) { 

        if(request.user_name){
            user.user_name = request.user_name;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.password){
            user.password = request.password;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.email){
            user.email = request.email;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.full_name){
            user.full_name = request.full_name;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.dob){
            user.dob = request.dob;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.gender){
            user.gender = request.gender;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.secure_login_recovery){
            user.secure_login_recovery = request.secure_login_recovery;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.street_address_1){
            user.street_address_1 = request.street_address_1;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.street_address_2){
            user.street_address_2 = request.street_address_2;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.city){
            user.city = request.city;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.state){
            user.state = request.state;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.zip){
            user.zip = request.zip;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.country){
            user.country = request.country;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.RoleID){
            var role = [];
            role = user.role;
            role.forEach(item => {
                if(item.RoleID == request.RoleID)
                {
                    item.ActiveStatus = !item.ActiveStatus;
                    item.UpdatedTime = new Date(Date.now()).toISOString();
                }
            });
            user.role = role;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.sold_product_ID){
            user.sold_product_ID = request.sold_product_ID;
            user.updated_dt = new Date(Date.now()).toISOString();
        }
        return user;
    },

    //Function to map update-product req to model
    mapProductUpdateToModel: function mapProductUpdateToModel(product, request) {

        if(request.product_name){
            product.product_name = request.product_name;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.unit_price){
            product.unit_price = request.unit_price;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.quantity){
            product.quantity = request.quantity;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.product_material){
            product.product_material = request.product_material;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.recycling_code){
            product.recycling_code = request.recycling_code;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.seller_ID){
            product.seller_ID = request.seller_ID;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.seller_name){
            product.seller_name = request.seller_name;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.product_category){
            product.product_category = request.product_category;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.product_sub_category){
            product.product_sub_category = request.product_sub_category;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        if(request.isApproved){
            product.isApproved = request.isApproved;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        else if(request.isApproved === false)
        {
            product.isApproved = request.isApproved;
            product.updated_dt = new Date(Date.now()).toISOString();
        }
        return product;
    },

    //Function to map update-cart req to model
    mapCartUpdateToModel: function mapCartUpdateToModel(cart, request) { 

        if(request.products){
            cart.products = request.products;
            cart.updated_dt = new Date(Date.now()).toISOString();
        }
        return cart;
    },

    //Function to Remove object using user_ID
    removeByUserID: function removeByUserID(details, user_ID, user_ID_value) { 

        var i = details.length;
        while(i--){
            if( details[i] 
                && details[i].hasOwnProperty(user_ID) 
                && (arguments.length > 2 && details[i][user_ID] === user_ID_value ) ){ 

                    details.splice(i,1);

            }
        }
        return details;
    },

    //Create Cloudant DB function
    createCloudantDB: function createCloudantDB() {  
        var uniqueUserID = Math.random().toString(26).slice(2);
      
        cloudant.db.create('green-production').then(() => {
          cloudant.use('green-production').insert({ user_ID: uniqueUserID }, 'Users').then((data) => {
            console.log(data);
          });
        }).catch((err) => {
          console.log(err);
        });
    },

    //Find all docs in a DB
    findAllDocs: function findAllDocs(){
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => {
            mydb.list({include_docs:true}, function (err, document) {
                if (err) {
                    if (err.message == 'missing') {
                        resolve({ data: {}, statusCode: 404 });
                    } else {
                        reject(err);
                    }
                } else {
                    resolve({ data: document, statusCode: 200 });
                }
            });
        });
    },

    //Fetch document based on doc name(doc ID)      
    getDocumentFromDB: function getDocumentFromDB(docName) {  
        var mydb = cloudant.db.use('green-production');
        //var myData;
            
        return new Promise((resolve, reject) => {
            mydb.get(docName, (err, document) => {
                if (err) {
                    if (err.message == 'missing') {
                        resolve({ data: {}, statusCode: 404 });
                    } else {
                        reject(err);
                    }
                } else {
                    resolve({ data: JSON.stringify(document), statusCode: 200 });
                }
            });
        });     

        //return myData;
    },

    //Create new Users document
    createUsersDocument: function createUsersDocument(
        docName,
        userName,
        password,
        email,
        full_name,
        dob,
        gender,
        secure_login_recovery,
        street_address_1,
        street_address_2,
        city,
        state,
        zip,
        country,
        role,
        sold_product_ID
        ) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => {
            let listId = uuidv4();
            let list = {
                _id: listId,
                type: docName,
                user_details: [
                    {                    
                    'user_ID': uuidv1(),
                    'user_name' : userName,
                    'password' : password,
                    'email' : email,
                    'full_name' : full_name,
                    'dob' : dob,
                    'gender' : gender,
                    'secure_login_recovery' : secure_login_recovery,
                    'street_address_1' : street_address_1,
                    'street_address_2' : street_address_2,
                    'city' : city,
                    'state' : state,
                    'zip' : zip,
                    'country' : country,
                    'role' : role,
                    'sold_product_ID' : sold_product_ID,
                    'created_dt': new Date(Date.now()).toISOString(),
                    'updated_dt': new Date(Date.now()).toISOString()
                }],
                
            };
            mydb.insert(list, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ 
                        data: { 
                            createdId: result.id,
                            createdRevId: result.rev,
                            user: list.user_details
                        },
                        statusCode: 201 
                    });
                }
            });
        });
    },

    //Insert new user-datails in Users document
    insertUserInfo: function insertUserInfo(id, rev, newUserDetails) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => { 
            let list = {
                _id: id,
                type: 'Users',
                _rev: rev,
                user_details: newUserDetails
            };
            mydb.insert(list, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { updatedId: response.id, updatedRevId: response.rev }, statusCode: 200 });
                }
            });
        });
    },

    //Create new Products document
    createProductsDocument: function createProductsDocument(
        docName,
        productName,
        unitPrice,
        quantity,
        productMaterial,
        recyclingCode,
        sellerID,
        sellerName,
        productCategory,
        productSubCategory
        ) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => {
            let listId = uuidv4();
            let list = {
                _id: listId,
                type: docName,
                product_details: [
                    {                    
                    'product_ID': uuidv1(),
                    'product_name' : productName,
                    'unit_price' : unitPrice,
                    'quantity' : quantity,
                    'product_material' : productMaterial,
                    'recycling_code' : recyclingCode,
                    'seller_ID' : sellerID,
                    'seller_name' : sellerName,
                    'product_category' : productCategory,
                    'product_sub_category' : productSubCategory,
                    'isApproved' : false,
                    'created_dt': new Date(Date.now()).toISOString(),
                    'updated_dt': new Date(Date.now()).toISOString()
                }],
                
            };
            mydb.insert(list, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { createdId: result.id, createdRevId: result.rev }, statusCode: 201 });
                }
            });
        });
    },

    //Insert new product-datails in Products document
    insertProductInfo: function insertProductInfo(id, rev, newProductDetails) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => { 
            let list = {
                _id: id,
                type: 'Products',
                _rev: rev,
                product_details: newProductDetails
            };
            mydb.insert(list, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { updatedId: response.id, updatedRevId: response.rev }, statusCode: 200 });
                }
            });
        });
    },

    //Create new Cart document
    createCartDocument: function createCartDocument(
        docName,
        userID,
        products
        ) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => {
            let listId = uuidv4();
            let list = {
                _id: listId,
                type: docName,
                cart_details: [
                    {                    
                    'user_ID': userID,
                    'products': products,
                    'created_dt': new Date(Date.now()).toISOString(),
                    'updated_dt': new Date(Date.now()).toISOString()
   
                }],
                
            };
            mydb.insert(list, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { createdId: result.id, createdRevId: result.rev }, statusCode: 201 });
                }
            });
        });
    },

    //Insert new user-product details in Cart document
    insertCartItem: function insertCartItem(id, rev, newCartDetails) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => { 
            let list = {
                _id: id,
                type: 'Cart',
                _rev: rev,
                cart_details: newCartDetails
            };
            mydb.insert(list, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { updatedId: response.id, updatedRevId: response.rev }, statusCode: 200 });
                }
            });
        });
    },

    //Create new orders document
    createOrdersDocument: function createOrdersDocument(
        docName,
        userID,
        products
        ) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => {
            let listId = uuidv4();
            let list = {
                _id: listId,
                type: docName,
                transaction_details: []              
            };
            mydb.insert(list, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { createdId: result.id, createdRevId: result.rev }, statusCode: 201 });
                }
            });
        });
    },

    //Insert new order in Orders document
    insertOrder: function insertOrder(id, rev, newTransactionDetails) {
        var mydb = cloudant.db.use('green-production');

        return new Promise((resolve, reject) => { 
            let list = {
                _id: id,
                type: 'Orders',
                _rev: rev,
                transaction_details: newTransactionDetails
            };
            mydb.insert(list, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ data: { updatedId: response.id, updatedRevId: response.rev }, statusCode: 200 });
                }
            });
        });
    },

}

export default utils