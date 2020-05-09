module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        comment:{
            type: DataTypes.STRING(192),
            allowNull:false,
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
        tableName: 'comment',
        timestamps: true
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        });
        Comment.belongsTo(models.Post, {
            foreignKey: 'id_post',
            as: 'post'
        })
    }

    return Comment;
};