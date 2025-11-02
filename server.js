// imported the json -server
const jsonServer =require('json-server')
// server created
const server =jsonServer.create()
// crteated middleWare
const middleWare =jsonServer.defaults()
// route creation
const route =jsonServer.router('db.json')

server.use(middleWare)
server.use(route)

// defining port
const PORT = process.env.PORT || 3000

// say to listen

server.listen(()=>{
    console.log("running sucessfully in", PORT)
})