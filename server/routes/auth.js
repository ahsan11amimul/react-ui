const router = require('express').Router();
const User = require("../models/User");

const bcrypt = require('bcrypt');

// Register Api

router.post('/register', async (req, res) => {

    try {
        //generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.password,
            password: hashedPassword

        });
        const user = await newUser.save();
        res.status(201).json({ "status": "success", user });
    } catch (error) {
        console.log(error);
        res.status(422).json({ "error": error.message });
    }
});
// Login Api
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json({ "error": "User Not Found!!!" });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Incorrect Password");
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
})
module.exports = router;