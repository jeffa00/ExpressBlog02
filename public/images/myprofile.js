var express = require("express"),
    router = express.Router();

    router.get("/", (req, res, next) => {
        res.render("myprofile", {
            id: 123,
            fName: "Jeff",
            lName: "Ammons",
            email: "jeffa@codecareeracademy.com"
        });
    });

module.exports = router;