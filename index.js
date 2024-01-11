
const jsonserver = require('json-server')


const productserver = jsonserver.create()


const router = jsonserver.router('db.json')


const middleware = jsonserver.defaults()

 productserver.use(middleware)
 productserver.use(router)


 const port = 5000 || process.env.PORT

 productserver.listen(port,()=>{
    console.log(`productserver started at ${port} and ready fetch request`);
 })
