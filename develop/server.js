var express = require("express"),
    app = express();

app.use(express.static(__dirname + '/blog/client'));

app.listen(2999);