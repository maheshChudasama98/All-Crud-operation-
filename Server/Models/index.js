const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
   'mydemo',
   'root',
   'yug@1226',
   {
      host: 'localhost',
      logging: false,
      dialect: 'mysql'
   }
);
const db = {}

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
   db.Roles = require('./Roles')(sequelize, DataTypes)
   db.Designation = require('./Designation')(sequelize, DataTypes)
   db.Company = require('./Company')(sequelize, DataTypes)
   db.Users = require('./User')(sequelize, DataTypes)


   db.Roles.hasMany(db.Users);
   db.Users.belongsTo( db.Roles);

   db.Company.hasMany(db.Users);
   db.Users.belongsTo( db.Company);
   
   db.Designation.hasMany(db.Users);
   db.Users.belongsTo( db.Designation);

   sequelize.sync({ force: false });
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
module.exports = db
