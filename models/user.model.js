// Importation du module mongoose pour la création du model

import mongoose from "mongoose"

// Creation du schema d'enregistrement des utilisateurs dans la db
const userSchema = new mongoose.Schema({
	// Le schema d'eregistrement du prenom
	firstname:{
		type: String,
		require:true,
		default: "Anonymous"
	},
	// Le schema d'eregistrement du nom
	lastname:{
		type:String,
		require:true,
		default:"Anonymous"
	},
	// Le schema d'eregistrement de l'age
	age:{
		type:Number,
		require: true,
		default: 0
	}
})

// On crée à partir du schema de base un model de transaction

export const userModel = mongoose.model("userModel", userSchema, "user")