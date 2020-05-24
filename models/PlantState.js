module.exports = function (sequelize, DataTypes) {

    var PlantState = sequelize.define("plant_state", {

        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },

        state_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }

    }, {
        tableName: 'plant_state',
        timestamps: false
    });

    return PlantState;
};