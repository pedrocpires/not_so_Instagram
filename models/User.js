module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
            unique: true
        },
        fullname: {
            type: DataTypes.STRING(192),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(192),
            allowNull: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING(40),
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING(192),
            allowNull: true
        },
        photo_profile: {
            type: DataTypes.STRING(192),
        },
        biography: {
            type: DataTypes.STRING(150),
        }
    }, {
        tableName: 'user',
        timestamps: true
    });

    return User;
};