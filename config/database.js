const mongoose = require('mongoose');
require('dotenv').config();
// configuration de la connexion à la base de données en utilisant les variables d'environnement

//const MONGODB_URI = process.env.MONGODB_URI;

// connexion à la base de données

const connectDB= async () => {
    try{
await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,{
    useNewUrlParser: true, //pour utiliser le nouveau url
    useUnifiedTopology: true,// pour utiliser le moteur de surveillance du serveur et eviter les avertissement
} )
console.log ('la connexion à la base de données ess etablie avec succes');
    } catch (err){
        console.error('impossible de se connecter à la base de données',err)
    }
}
const disconnectDB= async()=> {
     
        try {
            await mongoose.disconnect();
            console.log('La connexion à la base de données est fermée avec succès');
        } catch (err) {
            console.error('Impossible de fermer la connexion à la base de données', err);
        }
    }
    // initalisation de la base de données
    const initDB= async()=> {
        await connectDB ();
    
    };

    module.exports= { initDB,connectDB, disconnectDB }