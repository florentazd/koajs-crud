/**
 * FICHIER DE FONCTION DES REQUETS [GET] DE L'API
 */

// Importation du model d'enregistrement des utiisateurs

// La fonction suivante insère un nouvel utilisateur dans la base de données.
export const createUser = async ctx => {
	/**
	 * 1 - On récupère les données de l'utilisateur depuis la corps de la requete (nom, prenom, age)
	 * 2 - On insère les données dans la base de données.
	 * */
	let user = {
		firstname: ctx.request.body
	}
}