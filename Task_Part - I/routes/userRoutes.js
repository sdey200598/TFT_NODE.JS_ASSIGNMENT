const { Router } = require('express');

const router = Router()
const userCtrl = require('../controller/userController')
const jwt = require('jsonwebtoken');
const verifyUserToken = require('../middleware/userAuth')


router.get('/api/signIn',verifyUserToken, userCtrl.signInGet)
router.post('/api/signup', userCtrl.signUp, (req, res, next) => {
    console.log(res.locals)
    let token = jwt.sign( res.locals.user, 'swarup', {
        expiresIn: 24 * 60 * 60
    });
    res.header('authorization',token)
    res.send(res.locals.user)
})

router.post('/api/signin', userCtrl.signIn,(req, res, next) => {
    console.log(res.locals)
    let token = jwt.sign( res.locals.user, 'swarup', {
        expiresIn: 24 * 60 * 60
    });
    res.header('authorization',token)
    res.send(res.locals.user)
});



module.exports = router

