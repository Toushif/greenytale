# GreenyTale API Documentation

The APIs are deployed in heroku.

## API List

### Create a new Users document(Admin API - One time)
  - API: https://greenytale.herokuapp.com/api/users/new-user-doc
  - Type: POST
  - Auth: Not required
  - Request

  ```JSON 
  {
    "user_name": "soham.chattopadhyay",
    "password": "test123",
    "email": "soham.chattopadhyay93@gmail.com",
    "full_name": "Soham Chattopadhyay",
    "dob": "01/01/1905",
    "gender": "M",
    "secure_login_recovery": [
        {
            "security_question_ID": "1",
            "secure_answer": "Kolkata"
        }
    ],
    "street_address_1": "Selimpur Road, Dhakuria",
    "street_address_2": "",
    "city": "Kolkata",
    "state": "WB",
    "zip": "700031",
    "country": "India",
    "role": [
        "Role_Consumer"
    ],
    "sold_product_ID": [],
    "isAdmin": true
  }
  ```

### Login API
  - API: https://greenytale.herokuapp.com/api/users/login
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
    "userName": "nitish.kumar",
    "password": "asd132edfa"
}
```

### Profile API
  - API: https://greenytale.herokuapp.com/api/users/profile
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
    "user_name": "",
    "user_ID": "4c3da380-f114-11eb-83d7-9381734a8ac8"
}
```

### Sign-Up API
  - API: https://greenytale.herokuapp.com/api/users/sign-up
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
    "user_name": "nitish.kumar",
    "password": "asd132edfa",
    "email": "nitish.kumar@gmail.com",
    "full_name": "Nitish Kumar",
    "dob": "01/02/1911",
    "gender": "M",
    "secure_login_recovery": [
        {
            "security_question_ID": "1",
            "secure_answer": "Patna"
        }
    ],
    "street_address_1": "ADAX Street",
    "street_address_2": "GSdf",
    "city": "Patna",
    "state": "BH",
    "zip": "144123",
    "country": "India",
    "sold_product_ID": [],
    "isAdmin": false
}
```

### Update Existing User
  - API: https://greenytale.herokuapp.com/api/users/update-profile
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "7dcd3d40-eea1-11eb-b87c-119e6b87510a",
    "RoleID" : 2
}
```

### Delete Existing User
  - API: https://greenytale.herokuapp.com/api/users/delete-account
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "4c3da380-f114-11eb-83d7-9381734a8ac8"
}
```

### Create a new Products document(Admin API - One time)
  - API: https://greenytale.herokuapp.com/api/products/new-products-doc
  - Type: POST (Send Form-Data)
  - Auth: Not required
  - Request

``` 
product_name: Clear Glass,
unit_price: 12,
quantity: 200,
product_material: Glass,
recycling_code: #70 GL,
seller_ID: 0bb9b470-eafc-11eb-bffb-adf8fe07f4e0,
seller_name: Swadhin Mukherjee,
product_category: Materials,
product_sub_category: Fragile Materials
file: Upload image file with this property
```

### Create New Product
  - API: https://greenytale.herokuapp.com/api/products/new-product
  - Type: POST (Send Form-Data)
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

``` 
product_name: Clear Glass,
unit_price: 12,
quantity: 200,
product_material: Glass,
recycling_code: #70 GL,
seller_ID: 0bb9b470-eafc-11eb-bffb-adf8fe07f4e0,
seller_name: Swadhin Mukherjee,
product_category: Materials,
product_sub_category: Fragile Materials
file: Upload image file with this property
```

### Update Existing Product (Admin can use this to approve a product)
  - API: https://greenytale.herokuapp.com/api/products/update-product
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "product_ID": "15cc8980-eea6-11eb-ab1f-89c796c5f7c3",
    "isApproved": true
}
```

### Get All Products
  - API: https://greenytale.herokuapp.com/api/products
  - Type: GET
  - Auth: Not required
  - Request

``` 
  No request requried
```

### Get Product Info
  - API: https://greenytale.herokuapp.com/api/products/product-info
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
    "product_ID": "b16e9e40-eba5-11eb-b05c-97cfad7c58a9"
}
```

### Search Product
  - API: https://greenytale.herokuapp.com/api/products/search-product
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
  "product_name": "",
  "product_category": "",
  "product_sub_category": "Fragile"
}
```

### Get Seller Listings
  - API: https://greenytale.herokuapp.com/api/products/seller-listings
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "seller_ID": "0bb9b470-eafc-11eb-bffb-adf8fe07f4e0"
}
```

### Create a new Cart document(Admin API - One time)
  - API: https://greenytale.herokuapp.com/api/cart/new-cart-doc
  - Type: POST
  - Auth: Not required
  - Request

```JSON 
{
    "user_ID": "f0e76700-eafb-11eb-bffb-adf8fe07f4e0",
    "products": [
        {
            "product_ID": "b16e9e40-eba5-11eb-b05c-97cfad7c58a9",
            "quantity": "2"
        },
        {
            "product_ID": "c6f570b0-ec43-11eb-b6c2-eba4be0f94a7",
            "quantity": "4"
        }
    ]
}
```

### Create a new Cart for user
  - API: https://greenytale.herokuapp.com/api/cart/new-cart
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "fb1106a0-eafb-11eb-bffb-adf8fe07f4e0",
    "products": [
        {
            "product_ID": "b16e9e40-eba5-11eb-b05c-97cfad7c58a9",
            "quantity": "1"
        },
        {
            "product_ID": "c6f570b0-ec43-11eb-b6c2-eba4be0f94a7",
            "quantity": "3"
        }
    ]
}
```

### Get Cart
  - API: https://greenytale.herokuapp.com/api/cart/get-cart
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "f0e76700-eafb-11eb-bffb-adf8fe07f4e0"
}
```

### Update cart of existing user (includes deletion of product from cart)
  - API: https://greenytale.herokuapp.com/api/cart/update-cart
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Note: The latest product array with product add/delete/update to be done in Client and latest array sent in request
  - Request

```JSON 
{
    "user_ID": "f0e76700-eafb-11eb-bffb-adf8fe07f4e0",
    "products": [
        {
            "product_ID": "c6f570b0-ec43-11eb-b6c2-eba4be0f94a7",
            "quantity": "3"
        }
    ]
}
```

### Delete user's cart
  - API: https://greenytale.herokuapp.com/api/cart/delete-cart
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "fb1106a0-eafb-11eb-bffb-adf8fe07f4e0"
}
```

### Create a new Orders document(Admin API - One time)
  - API: https://greenytale.herokuapp.com/api/orders/new-orders-doc
  - Type: POST
  - Auth: Not Required
  - Request

```JSON 
{
    "user_ID": "f0e76700-eafb-11eb-bffb-adf8fe07f4e0",
    "products": [
        {
            "product_ID": "b16e9e40-eba5-11eb-b05c-97cfad7c58a9",
            "quantity": "2"
        },
        {
            "product_ID": "c6f570b0-ec43-11eb-b6c2-eba4be0f94a7",
            "quantity": "4"
        }
    ]
}
```

### Place a new order
  - API: https://greenytale.herokuapp.com/api/orders/new-order
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "d590ce60-eafb-11eb-9b89-0f5ac3556630",
    "products": [
        {
          "product_ID": "b16e9e40-eba5-11eb-b05c-97cfad7c58a9",
          "quantity": "2"
        },
        {
          "product_ID": "c6f570b0-ec43-11eb-b6c2-eba4be0f94a7",
          "quantity": "4"
        }
      ]
}
```

### Get orders for an user
  - API: https://greenytale.herokuapp.com/api/orders/get-orders
  - Type: POST
  - Auth: Required
  - Formant: Authorization : Bearer <<Token>>
  - Request

```JSON 
{
    "user_ID": "d590ce60-eafb-11eb-9b89-0f5ac3556630"
}
```

