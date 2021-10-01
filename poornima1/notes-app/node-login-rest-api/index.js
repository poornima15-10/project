const express = require('express');
const routes = require('./routes');
const app = express();
//const session=require('express-session');

app.use(express.json());
app.use(routes);
//app.use(session({secret:'sshhhh'}))
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3000,() => console.log('Server is running on port 3000'));