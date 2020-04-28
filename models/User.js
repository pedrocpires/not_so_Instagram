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
        createdAt: {
            type: DataTypes.DATE,
            // allowNull: false,
        },
        updatedAT: {
            type: DataTypes.DATE,
            // allowNull: false,
        }
    }, {
        tableName: 'user',
        timestamps: true
    });

    return User;
};