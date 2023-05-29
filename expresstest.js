const express = require('express')
const port = 3000
const hostname = 'localhost'
const serveStatic = require('serve-static')
//create server
const app = express()
//user defined middleware
app.use((req, res, next) => {
    console.log(`req.url: ${req.url}`)
    console.log(`req.method: ${req.method}`)
    console.log(`req.path: ${req.path}`)
    console.log(`req.query.idx: ${req.query.idx}`)

    // res.status(404)
    // res.type('.html')
    // res.send('<html></html>')
    res.redirect('https://www.sp.edu.sg')
    next()
})

//calling a middle ware
app.use(serveStatic('./public'))
app.listen(port,hostname, ()=>{
    console.log(`Started listeding at http://${hostname}:${port}`)
})