module.exports = function (sequelize, DataTypes) {

    var Plant = sequelize.define("Plant", {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        common_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        scientific_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        flower_color: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        height_ft: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        soil_moisture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        sunlight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        bloom_period: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        cold_stratification_required: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        drought_tolerance: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        fire_tolerance: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        precipitation_min_in: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        precipitation_max_in: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        palatable_human: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        min_temp_F: {
            type: DataTypes.INTEGER,
            allowNull: false
        }


    }, {
        tableName: 'plant',
        timestamps: false
    });

    Plant.associate = function (models) {
        //Plant can be found in many states
        Plant.belongsToMany(models.State, {
            through: 'plant_state',
            foreignKey: 'plant_id'
        });

        //Plant can be bought at many nurseries
        Plant.belongsToMany(models.Nursery, {
            through: 'plant_nursery',
            foreignKey: 'plant_id'
        });
    };
    return Plant;
};