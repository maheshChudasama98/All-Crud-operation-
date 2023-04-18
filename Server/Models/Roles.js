module.exports = (sequelize ,DataTypes) => {

    const Roles = sequelize.define('Roles', {
        Role_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        Role_Name: {
            type: DataTypes.STRING(30),
        }
    }, {
        modelName: 'Roles',
        initialAutoIncrement: 200,
    });

    console.log("Roles Table -",Roles === sequelize.models.Roles); // true
    return Roles
} 