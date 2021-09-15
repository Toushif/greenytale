import utils from '../utils/utils.js';

const carthelper = {

    getAllCarts: function getAllCarts(docList) {
        let id = '';
        let rev = '';
        let cart_details = [];        

        if(docList != null && docList.data != null && docList.data.total_rows > 0)
        {
            docList.data.rows.forEach(element => {
        
                //Extract information from Cart document
                if(element.doc.type == 'Cart')
                {
                id = element.id;
                rev = element.doc._rev;
                cart_details = element.doc.cart_details;
                }
            });
        }
        return {
            cartID: id,
            cartRev: rev,
            cartdetails: cart_details
        };
    },

    deleteCartHelper: async function deleteCartHelper(user_ID) {        
  
        //Find all available docs
        let docList = await utils.findAllDocs();
        let cart_details = []; 

        const {cartID, cartRev, cartdetails} = carthelper.getAllCarts(docList);

        cart_details = utils.removeByUserID(cartdetails, 'user_ID', user_ID);

        //Insert updated user details array in Users document
        let docInfo = await utils.insertCartItem(cartID, cartRev, cart_details);

        return docInfo;
    } 

}

export default carthelper