/**
 * initialisation d'une connexion avec la base de données des utilisateurs
 * */
// On importe le module mongoose pour établir une connexion avec la base de données
import mongoose from "mongoose"
// On importe ensuite le fichier de configuration depuis le module dotenv
import 'dotenv/config'


( async () => {
	try{
		// Initialisation de la connexion.
		let db = await mongoose.connect(process.env.DB_URL)
		if(db) console.log("Client connecté à la base de données..")
	}
	catch{
		console.log("Erreur lors de la connexion à la base de données")
	}
})()