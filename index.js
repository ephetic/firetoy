var express = require('express'),
    app = express(),
    port = process.env.PORT || 8888;

app.use(express.static(__dirname + '/client'));
app.listen(port);