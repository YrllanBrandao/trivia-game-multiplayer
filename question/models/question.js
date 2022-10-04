const Connection = require("../../database/database");
const Sequelize = require("sequelize");




const Question = Connection.define("question",{
    imageUrl:{
        type: Sequelize.STRING,
        allowNull: false
    },

    answer01:{
        type: Sequelize.STRING,
        allowNull:false
    },
    answer02:{
        type: Sequelize.STRING,
        allowNull:false
    },
    answer03:{
        type: Sequelize.STRING,
        allowNull:false
    },
    answer04:{
        type: Sequelize.STRING,
        allowNull:false
    },
    correct:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull:false
    }

} )


Question.sync({force:false});

module.exports = Question;