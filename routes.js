//Include the router module to create a router
import koaRouter from "koa-router"

// Importation des fonctions depuis le fichier de requete post
import {createUser} from "./requests/post.js"

// Importation des modules depuis le fichier de requete get
import {getAllUsers} from "./requests/get.js"


//Create a new router instance
export const router = new koaRouter();

//Create simple middlewares to test router.
router.get("/test", ctx => ctx.body = "Router is used ! ")

//----------------------CRUD API-----------------------------

//Create a path to add a user
router.post("/users/", createUser)

//Create a path to get a specify user
router.get("/users/:id", ctx => ctx.body = {
  userId: ctx.params.id
})

// La route de récupération des données de tous les utilisateurs
router.get("/users/",getAllUsers)


//Create a path to modify the user 
router.put("/users/:id", ctx => ctx.body = "User "+ctx.params.id+" well modify !")

//Create a path to delete a user
router.delete("/users/:id", ctx => ctx.body = "User "+ctx.params.id+" is delete !")