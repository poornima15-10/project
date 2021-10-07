
module.exports = (sequelize, Sequelize) => {
    const Sdb = sequelize.define("sessions", {
      userid: {
        type: Sequelize.INTEGER
      },
      sessionid: {
        type: Sequelize.STRING
      },
    });
  
    return Sdb;
  };