const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../dbConnection').promise();
//const session= require('express.session');

exports.register = async(req,res,next) => {
    const errors = validationResult(req);
    let ts=new Date();

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

        const [row] = await conn.execute(
            "SELECT `email` FROM `usersinfo1` WHERE `email`=?",
            [req.body.email]
          );

        if (row.length > 0) {
            return res.status(201).json({
                message: "The E-mail already in use",
            });
        }

        const hashPass = await bcrypt.hash(req.body.password, 12);

        const [rows] = await conn.execute('INSERT INTO `usersinfo1`(`name`,`email`,`password`,phone,isActive,createddate) VALUES(?,?,?,?,?,?)',[
            req.body.name,
            req.body.email,
            hashPass,
            req.body.phone,
            req.body.isActive,
            ts
            
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The user has been successfully inserted.",
            });
        }
        
    }catch(err){
        next(err);
    }
}