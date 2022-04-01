const express = require("express");
const app = express();

const port = 3500;

// Renderizar Views
app.set('view engine', 'ejs')
app.set('Views', __dirname + './Views')
app.use(express.static(__dirname + "./public"));


// Routes
app.use('/', require('./Routes/User'))

app.listen(port, (req, res) => {
  console.log("server: ", port);
});
