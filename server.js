const http = require('http');
const app=require('./app')

const port=1001;
// require ('dotenv').config()
// const port= process.env.port;
// const host= process.env.host;


const server = http.createServer(app)
server.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
})

