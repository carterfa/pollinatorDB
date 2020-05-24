module.exports = function (sequelize, DataTypes) {

    var PlantNursery = sequelize.define("plant_nursery", {

        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },

        nursery_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }

    }, {
        tableName: 'plant_nursery',
        timestamps: false
    });

    return PlantNursery;
};