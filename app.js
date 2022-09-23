// importation du module de connexion à la base de données.
import "./clients/mongoose.client.js"
import koa from "koa"
//Parse the receive json and send pretty json
import json from "koa-json"
// Import the helmet middleware
import helmet from "koa-helmet"
//import the router from the route.js
import { router } from "./routes.js"

//Create a koa app
const app = new koa()

//Use the json middleware -> Ce middleware est utiliser pour rendre plus lisible les retours [JSON]
app.use(json())

//Enable the helmet middleware -> Middleware de sécurité.
app.use(helmet())

//Enable the router on the app
app.use(router.routes())
//Enable the allowed method
app.use(router.allowedMethods())

//Start the koa app
app.listen({
  port: 80
}, () => console.log("Koa server started..."))
