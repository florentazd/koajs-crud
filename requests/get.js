// importation du model de l'utilisateur
import {userModel} from "../models/user.model.js"

// Importation du module mongoose pour la vérification des données recues
import mongoose from "mongoose"

// Creation du middelwares de récupération de tous les utilisateurs de la base de données
export const getAllUsers = async ctx => {
	/**
	 * Comment se déroule la récupération
	 * 1 - L'api recoit une requete [GET] sur la route /users/
	 * 2 - le module parcoure la base de données et récupère toutes les données
	 * 3 - le module renvoie les données en réponse à la requete
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
// Creation du module de récupération d"un utilisateur spécifique grace à son ID

export const getUser = async ctx => {
	/**
	 Comment se déroule la récupération
	 * 1 - L'api recoit une requete [GET] sur la route /users/:id
	 * 2 - le module parcoure la base de données et récupère les données de l'utilisteur dont l'id a été spécifié.
	 * 3 - le module renvoie les données en réponse à la requete
	 * */

	 // On récupère l'id de l''utilisateur recherchés depuis les paramètres de la requete
	 const userId = ctx.params.id

	 if(!mongoose.Types.ObjectId.isValid(userId)){
	 	ctx.status = 400
	 	return
	 }

	 try{
	 	// On lance une requete de récupérationde données
	 	await userModel.findOne({"_id":userId}).then((user) =>{
	 		if(!user)
	 			ctx.status = 404
	 		else{
	 			ctx.status = 200
	 			ctx.body = user
	 		}
	 	})
	 }catch{
	 	ctx.status = 500
	 }
}