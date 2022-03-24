const router = require('express').Router();

router
.route('/')
.post((req, res) => {
   res.json({
        message: 'Welcome to the API',
        type: 0
   })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;