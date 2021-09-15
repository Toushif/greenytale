import GoogleAuth from "../middleware/google-auth.js";
import utils from '../utils/utils.js';

const userhelper = {

    getAllUsers: function getAllUsers(docList) {
        let id = '';
        let rev = '';
        let user_details = [];        

        if(docList != null && docList.data != null && docList.data.total_rows > 0)
        {
            docList.data.rows.forEach(element => {
        
                //Extract information from Cart document
                if(element.doc.type == 'Users')
                {
                    id = element.id;
                    rev = element.doc._rev;
                    user_details = element.doc.user_details;
                }
            });
        }
        return {
            userID: id,
            userRev: rev,
            userDetails: user_details
        };
    },

    updateUserHelper: async function updateUserHelper(request) {
      //Find all available docs
      let docList = await utils.findAllDocs();

      let id = "";
      let rev = "";
      let user_details = [];
      let userObj = {};

      let userID = request.user_ID;

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

      user_details.forEach((user) => {
          if (user.user_ID == userID) {
              user = utils.mapUserUpdateToModel(user, request);
              userObj = user;
          }
      });

      //Insert updated user details array in Users document
      let docInfo = await utils.insertUserInfo(id, rev, user_details);

      return userObj;
    },

    userLoginHelper: async function userLoginHelper(request, fastify) {
        const { user_name, password } = request.body;

        //Find all available docs
        let docList = await utils.findAllDocs();

        let id = "";
        let rev = "";
        let user_details = {};

        if (
            docList != null &&
            docList.data != null &&
            docList.data.total_rows > 0
        ) {
            const docFound = docList.data.rows.find(
                (element) => element.doc.type === "Users"
            );
            if (docFound) {
                id = docFound.id;
                rev = docFound.doc._rev;

                if ((user_name && password) || (user_name && !password)) {
                    const userFound = docFound.doc.user_details.find(
                        (user) =>
                            !password
                                ? user.email === user_name
                                : user.user_name === user_name &&
                                    user.password === password
                    );
                    if (userFound) {
                        user_details = userFound;
                        user_details.token = fastify.jwt.sign(
                            { user_name, password: userFound.password },
                            { expiresIn: "1 day" }
                        );
                    } else {
                        throw new Error();
                    }
                    if (!password) {
                        const { googletoken: token } = request.headers;
                        const verified = await GoogleAuth(token);
                        if (!verified) {
                            throw new Error();
                        }
                    }
                } else {
                    throw new Error();
                }
            }
        }
  
        return user_details;
    },

    getUserHelper: async function getUserHelper(userName, user_ID) {

        //Find all available docs
        let docList = await utils.findAllDocs();

        let id = "";
        let rev = "";
        let user_details = {};

        if (
            docList != null &&
            docList.data != null &&
            docList.data.total_rows > 0
        ) {
            const docFound = docList.data.rows.find(
                (element) => element.doc.type === "Users"
            );
            if (docFound) {
                id = docFound.id;
                rev = docFound.doc._rev;                

                if (userName || user_ID) {
                    const userFound = docFound.doc.user_details.find(
                        (user) => user.user_name === userName || user.user_ID === user_ID
                    );
                    if (userFound) {
                        user_details = userFound;
                    } else {
                        throw new Error();
                    }
                } 
                else {
                    throw new Error();
                }
            }
        }
  
        return user_details;
    },

    accountDeletionHelper: async function accountDeletionHelper(user_ID) {        
  
        //Find all available docs
        let docList = await utils.findAllDocs();
        let user_details = []; 

        const {userID, userRev, userDetails} = userhelper.getAllUsers(docList);

        user_details = utils.removeByUserID(userDetails, 'user_ID', user_ID);

        //Insert updated user details array in Users document
        let docInfo = await utils.insertUserInfo(userID, userRev, user_details);

        return docInfo;
    }

}

export default userhelper