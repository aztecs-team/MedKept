const router = require('express').Router();
const { getMyPatients, getRecords } = require('./../logic/doctorLogic');

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
.route('/patients')
.post(async (req, res) => {
   const patients = await getMyPatients(req.body.doctor);
   res.json({
        success: 200,
        patients: patients,
        type: 0
   })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

router
.route('/report')
.post(async (req, res) => {
   const reports = await getRecords(req.body.patient, req.body.doctor);
   res.json({
        success: 200,
        reports: reports,
        type: 0
   })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;