// 1. send api request
// async function bookApiData() {
//     let apiData = await fetch("https://simple-books-api.glitch.me")
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// 2. Status
// GET /status
// async function bookApiData() {
//     let apiData = await fetch("https://simple-books-api.glitch.me/status")
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// 3. Books
//GET /books

// async function bookApiData() {
//     let apiData = await fetch("https://simple-books-api.glitch.me/books")
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// 4. Get a single book
// GET /books/:bookId 

// async function bookApiData() {
//     let apiData = await fetch("https://simple-books-api.glitch.me/books/1")
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// 5. Submit an order
// POST /orders

// async function bookApiData() {
//     let apiData = await fetch("https://simple-books-api.glitch.me/orders")
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData() // { error: 'Missing Authorization header.' }

// 6. API Authentication
// let apiUrl = "https://simple-books-api.glitch.me/api-clients/"
// async function bookApiData() {
//     let apiData = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             "clientName": "khalid",
//             "clientEmail": "khalid@example.com"
//          })
//     })
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()
// {
//     accessToken: '4aa4e499d07d041b7125a31507eaab656d64786200d03cc58a8f9a46cbe48959'
//   }


// 7. Submit an order after auth
// POST /orders
// Authorization: Bearer <YOUR TOKEN>
// Body/ raw /json
// {
//   "bookId": 2,
//   "customerName": "walled"
// }

// let apiUrl = "https://simple-books-api.glitch.me/orders"
// async function bookApiData() {
//     let apiData = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": "Bearer 4aa4e499d07d041b7125a31507eaab656d64786200d03cc58a8f9a46cbe48959"
//         },
//         body: JSON.stringify({
//             "bookId": 6,
//             "customerName": "walled"
//          })
//     })
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()
// order01 = { created: true, orderId: '_16KliIp8mvBGXq8D58wP' } 
// order02 = { created: true, orderId: 'FjWxEpmakc7kpgxj8mK8s' }
// order03 = { created: true, orderId: 'X48RvtL6IkesFjOHjm1jk' }


// 8. Get all orders
// GET /orders

// let apiUrl = "https://simple-books-api.glitch.me/orders"
// async function bookApiData() {
//     let apiData = await fetch(apiUrl, {
//         headers: {
//             "Authorization": "Bearer 4aa4e499d07d041b7125a31507eaab656d64786200d03cc58a8f9a46cbe48959"
//         },
//     })
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// let apiUrl = "https://simple-books-api.glitch.me/orders/_16KliIp8mvBGXq8D58wP"
// async function bookApiData() {
//     let apiData = await fetch(apiUrl, {
//         headers: {
//             "Authorization": "Bearer 4aa4e499d07d041b7125a31507eaab656d64786200d03cc58a8f9a46cbe48959"
//         },
//     })
//     let apiJsonData = await apiData.json()
//     console.log(apiJsonData);
// }
// bookApiData()

// 9. Update an order
// PATCH /orders/:orderId

let apiUrl = "https://simple-books-api.glitch.me/orders/_16KliIp8mvBGXq8D58wP"
async function bookApiData() {
    let apiData = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer 4aa4e499d07d041b7125a31507eaab656d64786200d03cc58a8f9a46cbe48959"
        },
        body: JSON.stringify({
            "customerName": "Waleed nawaz",
        })
        
    })
    let apiJsonData = await apiData.json()
    console.log(apiJsonData);
}
bookApiData()
