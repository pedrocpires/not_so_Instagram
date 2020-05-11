module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follow', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        id_followed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_follower: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'follow',
        timestamps: true
    });
    Follow.associate = (models) =>{
        Follow.belongsTo(models.User, {
            foreignKey: 'id_followed',
            as: 'user_followed',
        });
        Follow.belongsTo(models.User, {
            foreignKey: 'id_follower',
            as: 'user_follower',
        })
    }

    return Follow;
};