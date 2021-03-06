const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//update user api
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("account has been updated");
        } catch (error) {
            console.log(error);
            res.status(500).json(error); 
        }
    } else {
        return res.status(403).json("You Can Update Only Your account");
    }
});
module.exports = router;