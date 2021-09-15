import utils from '../utils/utils.js';
import orderhelper from '../helper/orderhelper.js';
import carthelper from '../helper/carthelper.js';
import producthelper from "../helper/producthelper.js";
import userhelper from "../helper/userhelper.js";

export default async function(fastify, options, next) {

    //Create a new Orders document(Admin API - One time)
    fastify.post('/api/orders/new-orders-doc', async (request, reply) => {

        //Create New Document
        var data = await utils.createOrdersDocument('Orders', request.body.user_ID, request.body.products);
        
        reply.code(201).send(data)
    })

    //Add new Order in cart
    fastify.post('/api/orders/new-order', {
        preValidation: [fastify.authentication]
        }, async (request, reply) => {

        try {

            const {user_ID, products} = request.body

            //Find all available Orders docs
            let docList = await utils.findAllDocs();
            let transaction_details = [];
            let update_product_request = {}
            let update_user_request = {
                user_ID : '',
                sold_product_ID: []
            }
            
            //Get all order details
            const {orderID, orderRev, transactionDetails} = orderhelper.getAllOrders(docList);

            //Insert new order object in the array
            transaction_details = orderhelper.newOrderObj(user_ID, products, transactionDetails);
        
            //Step 1: Insert order in Orders document
            let orderDocInfo = await utils.insertOrder(orderID, orderRev, transaction_details);

            //Step 2: Delete Cart
            await carthelper.deleteCartHelper(user_ID); 

            let finalUpdateInfo = await orderhelper.performFinalUpdates(products);

            //Send reply
            reply.code(201).send(orderDocInfo)
            
        } catch (error) {
            reply.code(500).send(error)
        }        
    
    })

    //Get orders for an user
    fastify.post('/api/orders/get-orders', {
        preValidation: [fastify.authentication]
        }, async (request, reply) => {

        try {

            const {user_ID} = request.body
            let transactions = []
        
            //Find all available Orders docs
            let docList = await utils.findAllDocs();
            
            //Get all order details
            const {orderID, orderRev, transactionDetails} = orderhelper.getAllOrders(docList);

            transactionDetails.forEach(orders => {
                if(orders.user_ID == user_ID)
                {
                    transactions = orders.transactions;
                }
            })

            //Send reply
            reply.code(201).send(transactions)
            
        } catch (error) {
            reply.code(500).send(error)
        }    
    })

    next()
}