module.exports = (sequelize, Sequelize) => {
    const Session= sequelize.define("sessions", {
   /* userId:
    {
        type:Sequelize.STRING,
        //forignkey:true

    },*/
        sessionid:
     {
         type:Sequelize.STRING
     }
    });

    return Session;
  }