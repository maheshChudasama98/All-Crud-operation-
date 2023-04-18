module.exports = (sequelize ,DataTypes) => {
    const Designation = sequelize.define('Designation', {
        Desi_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        Desi_Name: {
            type: DataTypes.STRING(30),
        }
    }, {
        modelName: 'Designation',
        initialAutoIncrement: 300,
    });

    console.log("Designation Table -",Designation === sequelize.models.Designation); // true
    return Designation
} 