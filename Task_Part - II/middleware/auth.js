const jwt = require('jsonwebtoken');

function verifyUserToken(req, res, next) {

    // check header or url parameters or post parameters for token
    const token = req.headers['authorization'];
  

    if (token == null)
      return res.sendStatus(401);
    if (!token) 
      return res.status(403).send({ auth: false, message: 'No token provided' });
    jwt.verify(token, 'swarup', function(err, body) {      
      if (err) 
        return res.status(500).send({ auth: false, message: 'Failed to authenticate the token' });    

        
      req.body= body;
      next();
    });
  
  }

module.exports = verifyUserToken