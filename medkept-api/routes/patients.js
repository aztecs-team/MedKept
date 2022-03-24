const router = require('express').Router();
const { getMyRecords } = require('../logic/patientsLogic');

router
.route('/')
.post(async (req, res) => {
   const body = req.body;
   const records = await getMyRecords(body.patient);
   res.json({
        status: 200,
        records: records,
   })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;