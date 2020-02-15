
const Land = require('../models/land');

module.exports = {
    createLand: (req, res, _next) => {
        let land = new Land({
            ...req.body
        })
        land.save()
            .then(result => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
    getAllLand: (_req, res, _next) => {
        Land.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })
    },
}