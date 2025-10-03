const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
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

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
