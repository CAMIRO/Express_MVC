const data = require("../Models/db.json");


module.exports = {
  get : (req, res) => {
    res.render("users", { Name: data.name });
  }
}