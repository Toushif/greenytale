const role = {
    type: 'object',
    properties: {
        RoleID: { type: 'number' },
        Name: { type: 'string' },
        GroupName: { type: 'string' },
        Precedence: { type: 'number' },
        CreatedTime: { type: 'string' },
        UpdatedTime: { type: 'string' },
        AppCustomer: { type: 'string' },
        ActiveStatus: { type: 'boolean' }
    }
}

export const newUserSchema = {
    schema: {
        response: {
            201: {
              type: 'object',
              properties: {
                user_ID: { type: 'string' },
                user_name: { type: 'string' },
                password: { type: 'string' },
                email: { type: 'string' },
                full_name: { type: 'string' },
                dob: { type: 'string' },
                gender: { type: 'string' },
                secure_login_recovery: {
                    type: 'object',
                    properties: {
                        security_question_ID: { type: 'number' },
                        secure_answer: { type: 'string' }
                    }
                },
                street_address_1: { type: 'string' },
                street_address_2: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zip: { type: 'string' },
                country: { type: 'string' },
                role: {
                    type: 'array',
                    items: role
                },
                sold_product_ID: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                token: { type: 'string' },
                created_dt: { type: 'string' },
                updated_dt: { type: 'string' }
              }
            }
        }
    }
}