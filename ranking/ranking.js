const Connection = require("../database/database");
const Sequelize = require("sequelize");



const Player = Connection.define("player", {
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


User.sync({force:false})


module.exports = User;