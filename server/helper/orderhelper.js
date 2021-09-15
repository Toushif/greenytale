import {v1 as uuidv1} from 'uuid';
import producthelper from "../helper/producthelper.js";
import userhelper from "../helper/userhelper.js";

const orderhelper = {

    getAllOrders: function getAllOrders(docList) {
        let id = '';
        let rev = '';
        let transaction_details = [];
      
        if(docList != null && docList.data != null && docList.data.total_rows > 0)
        {
          docList.data.rows.forEach(element => {
      
            //Extract information from Orders document
            if(element.doc.type == 'Orders')
            {
              id = element.id;
              rev = element.doc._rev;
              transaction_details = element.doc.transaction_details;
            }
          });
        }
        return {
            orderID: id,
            orderRev: rev,
            transactionDetails: transaction_details
        };
    },

    newOrderObj: function newOrderObj(user_ID, products, transactionDetails) {
        //Create new transaction object for new user
        let transactionObj = {
            'user_ID': user_ID,
            'transactions': [
                {
                    'transactionID': uuidv1(),
                    'products': products
                }
            ],
            'created_dt': new Date().toISOString()
        };
        
        //Modifiy existing User_Details array from document
        transactionDetails.push(transactionObj);
        return transactionDetails;
    },

    performFinalUpdates: async function performFinalUpdates(products) {
        let update_product_request = {}
        let update_user_request = {}

        products.forEach(async item => {
            let product_details = await producthelper.getProductInfoHelper(item.product_ID);

            update_product_request.product_ID = item.product_ID;
            update_product_request.quantity = product_details.quantity - item.quantity;

            console.log('update_product_request', update_product_request);

            //Step 3: Update product count
            await producthelper.updateProductHelper(update_product_request);

            const {sold_product_ID} = await userhelper.getUserHelper('', product_details.seller_ID);
            console.log('sold_product_ID', sold_product_ID);
            sold_product_ID.push(item.product_ID);
            
            update_user_request.user_ID = product_details.seller_ID;            
            update_user_request.sold_product_ID = sold_product_ID;

            console.log('update_user_request', update_user_request);

            //Step 4: Update user sold_product_id
            await userhelper.updateUserHelper(update_user_request);
        });

        return 'Done';
    }

}

export default orderhelper