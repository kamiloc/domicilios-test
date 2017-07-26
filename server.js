//'use strict';

var PORT = process.env.PORT || 5000;

var express = require('express');
var app = express();
var folder = __dirname + '/public/';

// expose public folder as static assets
app.use('/domicilios-test', express.static(folder));

// add our app routes
app.get('/*', function (req, res) {

    if (req.url === '/') {
        req.url += 'domicilios-test/';
    }
    if (req.url === '/domicilios-test/') {
        res.sendFile(folder + 'index.html');
    } else {
        res.status(404).sendFile(folder + '404.html');
    }

});

const server = app.listen(PORT, function () {
    // console.log();
    console.log('\x1b[36m%s\x1b[2m', 'The Aplication is now listening at http://localhost/' + PORT);
});