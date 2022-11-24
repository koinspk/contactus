const mongoose = require('mongoose');
//let UserModule = require('./User')

module.exports = function (app) {
    
  mongoose.connect(
    'mongodb://localhost:27017/expresslearn'
  ).catch(err => {
    process.exit(1);
  }).then(c=>{
    
  });
  // const MyModel = UserModule.create({name:'df'})
  // console.log();

  app.dbconnection = mongoose
  return app;
 // app.set('mongooseClient', mongoose);
};
