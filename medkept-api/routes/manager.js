const router = require('express').Router();
const { uploadReport } = require('./../logic/managerLogic');

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

router
.route('/upload')
.post(async (req, res) => {
   await uploadReport(req.body);
   res.json({
        message: 'Successfully uploaded image',
        status: 200
   })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

router
.route('/add')
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