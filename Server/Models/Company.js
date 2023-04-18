module.exports = (sequelize ,DataTypes) => {
    const Company  = sequelize.define('Company', {
        Company_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        Company_Name: {
            type: DataTypes.STRING(30),
        }
    }, {
        modelName: 'Company',
        initialAutoIncrement: 400,
    });

    console.log("Company Table -",Company  === sequelize.models.Company ); // true
    return Company 
} 