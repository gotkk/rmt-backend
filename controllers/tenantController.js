
const Tenant = require('../models/tenant');

module.exports = {
    getAllTenant: (_req, res, _next) => {
        Tenant.find()
            .then((result) => {
                res.status(200).json({ success: true, result: result });
            })
            .catch((err) => {
                res.status(400).json({ success: false, result: err });
            })

    },
   
}