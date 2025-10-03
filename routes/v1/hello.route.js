const expres = require("express");
const helloFunction = require("../../controller/hello.controller");
const router = expres.Router();

router.get("/", helloFunction.hello);

module.exports = router;
