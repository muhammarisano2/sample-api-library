// const bookModel = require('../models/book');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const MiscHelper = require('../helpers/helpers')
module.exports = {
  login: (req, res) => {
    const { email_user, password} = req.body;
    
    // get dan cek passowrd
    bookModel.getUser(email)
      .then((result) => {
        const datauser = result;
        let token = jwt.sign({ id: id_user, email: email_user }, process.env.SECRET_KEY, { expiresIn: '2h' });
        datauser.token;
        delete datauser.password;
        console.log(token)
        // res.json({
        //   tokennya: token
        // })

        MiscHelper.response(res, datauser, 200);
      })

    //make token 
  },
}