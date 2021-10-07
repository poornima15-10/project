module.exports = (sequelize, Sequelize) => {
    const Notes= sequelize.define("note", {
      userID:
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