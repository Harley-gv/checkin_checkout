const { db, DataTypes } = require('../utils/database.util')


// model sequelize
const Registration = db.define("registration", {
    id: {
		primaryKey: true,
		type: DataTypes.NUMBER,
		autoIncrement: true,
		allowNull: false,
	},
	entranceTime: {
		type: DataTypes.DATE,
		
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull:true
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'working',
	},
})


module.exports = { Registration }