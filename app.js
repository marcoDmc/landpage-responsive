const routes = require("./routes/router");
const express = require("express");
const path = require("path");
const cors = require("cors");
const port = 3333;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(cors());

// statics
app.use(express.static(path.resolve(__dirname, "views")));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("./css", express.static(__dirname + "views/css"));
app.use("./js", express.static(__dirname + "views/js"));
app.use("./images", express.static(__dirname + "views/images"));

app.listen(port, () => console.info(`server running http://localhost:${port}`));
