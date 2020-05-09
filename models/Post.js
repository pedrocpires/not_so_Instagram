module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        image_post:{
            type: DataTypes.STRING(192),
            allowNull:false,
            unique: true
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        caption: {
            type: DataTypes.STRING,
        },
        id_user: {
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
        tableName: 'post',
        timestamps: true
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        });
        Post.hasMany(models.Comment, {
            foreignKey: 'id_post',
            as: 'comment'
        })
    }

    return Post;
};