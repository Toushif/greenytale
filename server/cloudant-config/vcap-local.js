const vcap = {
    "services": {
        "cloudantNoSQLDB": {
            "credentials": {
              "apikey": process.env.CLOUDANT_API_KEY,
              "host": process.env.CLOUDANT_HOST,
              "iam_apikey_description": process.env.CLOUDANT_API_KEY_DESCRIPTION,
              "iam_apikey_name": process.env.CLOUDANT_API_KEY_NAME,
              "iam_role_crn": process.env.CLOUDANT_IAM_ROLE_CRM,
              "iam_serviceid_crn": process.env.CLOUDANT_IAM_SERVICE_ID_CRM,
              "password": process.env.CLOUDANT_PASSWORD,
              "port": 443,
              "url": process.env.CLOUDANT_URL,
              "username": process.env.CLOUDANT_USERNAME
            },
            "label": "cloudantNoSQLDB"
        }
    }
}

export default vcap