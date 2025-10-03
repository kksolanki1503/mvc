const expres = require("express");
const { DummyController } = require("../../controller");
// const helloFunction = require("../controller/hello.controller");
const router = expres.Router();

router.get("/", DummyController.dummy);

module.exports = router;
