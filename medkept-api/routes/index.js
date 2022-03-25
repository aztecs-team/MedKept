const router = require('express').Router();

router
.route('/')
.get(async (req, res) => {
    res.json({ 
        message: 'Welcome to the API',
        type: 0
    });
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
})

router.use('/doctor', require('./doctor'));
router.use('/manager', require('./manager'));
router.use('/patient', require('./patients'));

module.exports = router;