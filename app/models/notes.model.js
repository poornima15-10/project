

module.exports = (sequelize, Sequelize) => {
    const Notes= sequelize.define("notes", {
      userId:
      {
        type:Sequelize.STRING
      },
      Nid:
      {
        type:Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      
    });
  
    return Notes;
  };