import koa from "koa" 
//Parse the receive json and send pretty json
import json from "koa-json"
//import the router from the route.js
import {router} from "./routes.js"

//Create a koa app
const app = new koa()

//Use the json middleware
app.use(json())

//Enable the router on the app
app.use(router.routes())
//Enable the allowed method
app.use(router.allowedMethods())

//Create a simple middleware in koa
app.use(ctx => ctx.body = "<h1> Hello world !  </h1>")

//Set handler to show error
app.on("error", err => console.log(err))

//Start the koa app 
app.listen({
  port: 80
}, () => console.log("Koa server started..."))