const expres = require("express");

const router = expres.Router();

router.use("/v1", require("./v1"));
router.use("/v2",require("./v2"))
module.exports = router;
