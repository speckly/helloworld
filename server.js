const http = require('http')
const fs = require('fs')
const path = require('path')
const hostname = 'localhost'
const port = 3000
const server = http.createServer((req, res) => {
    console.log('Request for page ' + req.url + ' using ' + req.method + ' method')
    body = []
    req.on('error', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        let filePath, urlPath
        if (req.method == 'GET'){
            res.writeHead(200, './public/index.html')
            res.end("test")
        } else if (req.method == 'POST'){
            console.log(body)
            let bodyObj = JSON.parse(body)
            
            console.log(bodyObj)
            u = bodyObj.username
            p = bodyObj.password
            if (u == 'admin@abc.com' && p == 'a'){
                res.end("{'message':'Welcome admin!'}")
            } else {
                res.end('Wrong')
            }
        }
    })
})
server.listen(port, hostname, () => {
    console.log('Server has started')
})
