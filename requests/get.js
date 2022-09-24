// importation du model de l'utilisateur
import {userModel} from "../models/user.model.js"

// Creation du middelwares de récupération de tous les utilisateurs de la base de données
export const getAllUsers = async ctx => {
	/**
	 * Comment se déroule la récupération
	 * 1 - L'api recoit une requete [GET] sur la route /users/
	 * 2 - le module parcoure la base de données et récupère toutes les données
	 * 3 - le module renvoie les les données en réponse à la requetes
	 * */
	try{
		// On lance une requete de récupération de données
		await userModel.find({}).then( users =>{
			if(users.length === 0)
				ctx.status = 204
			else{
				ctx.status = 200
				ctx.body = users
			}
		})
	}catch{
		ctx.status = 500
	}
}