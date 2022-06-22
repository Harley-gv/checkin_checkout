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
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.DATE,
		
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
})


module.exports = { Registration }