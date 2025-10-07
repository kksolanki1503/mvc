const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const BaseError = require("./errors/Base.error");
const { ErrorHandler } = require("./util");
// const { ErrorHandler } = require("./util");
// const errorHandler = require("./util/errorHandler");
// const router = require("./routes/hello.route");
// const { HelloRoute } = require("./routes/v1");
// const { helloRouter } = require("./routes/hello.router");
// const helloRouter = require("./routes/hello.router");
// const router = require("./routes/hello.router");s
const app = express();
// app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", require("./routes"));

app.use(ErrorHandler.errorHandler);

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
