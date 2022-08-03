const https = require('https')
const API = 'https://jsonplaceholder.typicode'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')