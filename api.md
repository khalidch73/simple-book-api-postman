### Learn USE API By postman 
- We have a api build by third body we want to use that by postman. we explore all method here related to our api 
1. send api request by postman by Get method 
https://simple-books-api.glitch.me
- response
{
    "message": "Welcome to the Simple Books API."
}
2. Status
GET /status
- response 
{
    "status": "OK"
}
3. List of books
GET /books
- response 
[
    {
        "id": 1,
        "name": "The Russian",
        "type": "fiction",
        "available": true
    },
    {
        "id": 2,
        "name": "Just as I Am",
        "type": "non-fiction",
        "available": false
    },
    {
        "id": 3,
        "name": "The Vanishing Half",
        "type": "fiction",
        "available": true
    },
    {
        "id": 4,
        "name": "The Midnight Library",
        "type": "fiction",
        "available": true
    },
    {
        "id": 5,
        "name": "Untamed",
        "type": "non-fiction",
        "available": true
    },
    {
        "id": 6,
        "name": "Viscount Who Loved Me",
        "type": "fiction",
        "available": true
    }
]
4. Get a single book
GET /books/:bookId   
GET /books/1   ==> we now that there is 6 books ids so we can only these 6 ids 1 to 6  
- response 
{
    "id": 1,
    "name": "The Russian",
    "author": "James Patterson and James O. Born",
    "isbn": "1780899475",
    "type": "fiction",
    "price": 12.98,
    "current-stock": 12,
    "available": true
}
GET /books/6
- response 
{
    "id": 6,
    "name": "Viscount Who Loved Me",
    "author": "Julia Quinn",
    "type": "fiction",
    "price": 15.6,
    "current-stock": 1021,
    "available": true
}
- response 
GET /books/7
{
    "error": "No book with id 7"
} error 404 page not found ==> we not there is only 6 books 7th book not found 
5. Submit an order
POST /orders
- response 
{
    "error": "Missing Authorization header."
} 401 unauthorized ==> we are not login in this api.Allows you to submit a new order. Requires authentication.The request body needs to be in JSON format and include the following properties:

bookId - Integer - Required
customerName - String - Required
# example
{
  "bookId": 1,
  "customerName": "John"
}
6. API Authentication
To submit or view an order, you need to register your API client.

POST /api-clients/

The request body needs to be in JSON format and include the following properties:

clientName - String
clientEmail - String
{
   "clientName": "waleed",
   "clientEmail": "waleed@example.com"
}
- response 
{
    "accessToken": "8be81d448ceb92daf22195b2db05355f6ec0c7c2dc146ef6e85e7e1656a58709"
}
7. Submit an order after auth
POST /orders
Authorization: Bearer <YOUR TOKEN>
Body/ raw /json
{
  "bookId": 2,
  "customerName": "walled"
}
- response 
{
    "created": true,
    "orderId": "quSV1qWfQ-H7GTo86ktWt"
} 201 created
8. Get all orders
GET /orders

Allows you to view all orders. Requires authentication.
- response 
[
    {
        "id": "quSV1qWfQ-H7GTo86ktWt",
        "bookId": 1,
        "customerName": "walled",
        "createdBy": "162be3519f5629186711471b0343b327bf87b6e8d4c97dcffb3d5b4ccb5b019f",
        "quantity": 1,
        "timestamp": 1708090440435
    }
] 200 ok
9. Update an order
PATCH /orders/:orderId

Update an existing order. Requires authentication.

The request body needs to be in JSON format and allows you to update the following properties:

customerName - String
Example
PATCH /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

{
  "customerName": "John"
}
9. View update order 
GET /orders/:orderId
- response 
{
    "id": "quSV1qWfQ-H7GTo86ktWt",
    "bookId": 1,
    "customerName": "Waleed Nawaz",
    "createdBy": "162be3519f5629186711471b0343b327bf87b6e8d4c97dcffb3d5b4ccb5b019f",
    "quantity": 1,
    "timestamp": 1708090440435
}
10. View all orders including updated order 
GET /orders
-response 
[
    {
        "id": "quSV1qWfQ-H7GTo86ktWt",
        "bookId": 1,
        "customerName": "Waleed Nawaz",
        "createdBy": "162be3519f5629186711471b0343b327bf87b6e8d4c97dcffb3d5b4ccb5b019f",
        "quantity": 1,
        "timestamp": 1708090440435
    }
]
11. Delete an order
DELETE /orders/:orderId

Delete an existing order. Requires authentication.

The request body needs to be empty.

Example

DELETE /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>
- response 
nothing
12. view orders to verified delete order 
GET /orders
- response 
[]

