const express = require('express');
// Importe Sequelize
const {DataTypes, Sequelize} = require('sequelize');

const app = express();

const port = process.env.PORT || 3000;
let sequelize = null;

if(process.env.NODE_ENV && process.env.NODE_ENV==="production")
{
    // LE CAS QUE MËME ON EST SUR HEROKU
    // Initialiser la connexion à un serveur de BDD
    sequelize = new Sequelize(
    // ICI TOUT VA CHANGERRRR
    process.env.DATABASE_URL
)
}
else {
    // LE CAS QUE MËME ON EST EN LOCAL
    // Initialiser la connexion à un serveur de BDD
    sequelize = new Sequelize(
            'mysql://ldlc_user:root1234@localhost/ldlc'
        )
}


// Créer le modèle des claviers
const Keyboard = sequelize.define('Keyboard', {
    brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

app.get('/posts', (req, res) => {
    res.send({
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "kfokfokfokfofkofko kokjdf isjidjf idj"
    })
});

// Tester si la connexion à la BDD est bonne
sequelize.authenticate()
.then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })
})