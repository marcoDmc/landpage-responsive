const path = require("path");

exports.home = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "pages", "home.html"));
};
