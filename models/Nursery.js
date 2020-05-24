module.exports = function (sequelize, DataTypes) {

    var Nursery = sequelize.define("Nursery", {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            },
            targetKey: true
        },

        website: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]
            }
        }

    }, {
        tableName: 'nursery',
        timestamps: false
    });

    Nursery.associate = function (models) {
        //Nursery has many plants
        Nursery.belongsToMany(models.Plant, {
            through: 'plant_nursery',
            foreignKey: 'nursery_id'
        });

        Nursery.belongsTo(models.State, { foreignKey: 'state' });
    };

    return Nursery;
};