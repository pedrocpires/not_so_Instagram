module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        fullname: {
            type: DataTypes.STRING(192),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(192),
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(30)
        },
        password: {
            type: DataTypes.STRING(192),
            allowNull: false
        },
        photo_profile: {
            type: DataTypes.STRING(192),
        },
        biography: {
            type: DataTypes.STRING(150),
        },
        gender: {
            type:DataTypes.STRING(15)
        },
        website: {
            type:DataTypes.STRING(192)
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
        tableName: 'user',
        timestamps: true
    });

    return User;
};