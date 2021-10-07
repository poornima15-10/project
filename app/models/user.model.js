module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING(255)
    },
    email: {
      type: Sequelize.STRING(255)
    },
    password: {
      type: Sequelize.STRING 
    }
  });

  return User;
};
