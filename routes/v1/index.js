const expres = require("express");

const router = expres.Router();

router.use("/hello", require("./hello.route"));
router.use("/dummy", require("./dummy.route"));

// -------------------------------------------------------------------------------------------------------------------------

router.use("/todos", require("./todos.route"));
module.exports = router;
