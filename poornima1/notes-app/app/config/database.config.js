module.exports = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "root",
        DB: "Notesinfo",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
    url: 'mongodb://localhost:27017/Notesinfo'
}