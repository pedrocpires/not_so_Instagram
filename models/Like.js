module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_post: {
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
        tableName: 'post_like',
        timestamps: true
    });

    Like.associate = (models) => {
        Like.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        });
        Like.belongsTo(models.Post, {
            foreignKey: 'id_post',
            as: 'post'
        })
    }

    return Like;
};