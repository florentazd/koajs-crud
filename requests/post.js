/**
 * FICHIER DE FONCTION DES REQUETS [GET] DE L'API
 */

// Importation du model d'enregistrement des utiisateurs
import {userModel} from "../models/user.model.js"
// La fonction suivante insère un nouvel utilisateur dans la base de données.
export const createUser = async ctx => {
	/**
	 * 1 - On récupère les données de l'utilisateur depuis la corps de la requete (nom, prenom, age)
	 * 2 - On insère les données dans la base de données.
	 * */
	 // On définie la variable devant contenir les données de l'utilisateur
	let user = {
		firstname: ctx.request.body.firstname || undefined,
		lastname: ctx.request.body.lastname || undefined,
		age: ctx.request.body.age || undefined
	}

	try {
		/*On démarre l'insertion du nouvelle utilisateur dans la base de données*/
		await userModel.create(user).then( user => {
			// Si l'utilisateur à été créé, on le renvoie
			ctx.status = 201
			ctx.body = user
		})	
	}catch(e){
		console.log(e)
		ctx.status = 500
	}
	
}