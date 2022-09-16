const router = require("express").Router();

const {getHome, getUser, postHome, putHome, deleteHome} = require("../controls/use.controls")


router.get("/user", getUser)

router.post("/user", postHome)

router.put("/update", putHome)

router.delete("/user", deleteHome)

module.exports = router;