const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");

const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/hello", function(req, res) {
  res.json({
    valid: true
  });
});

app.listen(5000, function() {
  console.log("Example app listening on port 3000!");
});
