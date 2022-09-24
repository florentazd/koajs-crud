// importation du model de l'utilisateur
import {userModel} from "../models/user.model.js"

// Importation du module mongoose pour la vérification des données recues
import mongoose from "mongoose"


// Creation du module de suppresion des données d'un utilisateur dans la base données
export const deleteUser = async ctx => {
	const userId = ctx.params.id

	 if(!mongoose.Types.ObjectId.isValid(userId)){
	 	ctx.status = 400
	 	return
	 }

	 try{
	 	// On lance une requete de récupérationde données
	 	await userModel.findOneAndDelete({"_id":userId}).then((user) =>{
	 		if(!user)
	 			ctx.status = 404
	 		else{
	 			ctx.status = 200
	 			ctx.body = "User delete.."
	 		}
	 	})
	 }catch{
	 	ctx.status = 500
	 }
}