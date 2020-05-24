module.exports = function (sequelize, DataTypes) {

    var State = sequelize.define("State", {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        abbreviation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            },
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

    }, {
        tableName: 'state',
        timestamps: false
    });

    State.associate = function (models) {
        //State has many plants
        State.belongsToMany(models.Plant, {
            through: 'plant_state',
            foreignKey: 'state_id'
        });

        //State has many nurseries
        State.hasMany(models.Nursery, { foreignKey: 'state', sourceKey: 'abbreviation' })
    };

    return State;
};