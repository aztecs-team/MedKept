require('dotenv').config();

module.exports = (req, _res, next) => {
    if (req.headers.authorization==`Bearer ${process.env.AUTH}`) {
        next();
    } else {
        let err = new Error('Unauthorized');
        err.status = 401;
        next(err);
    }
}