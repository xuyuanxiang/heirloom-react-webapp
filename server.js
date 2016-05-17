var express = require('express');
var path = require('path');
var compression = require('compression');
var cluster = require('cluster');
var CUPS = require('os').cpus().length;

var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 8080;

if (cluster.isMaster) {
    for (var i = 0; i < CUPS; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.warn('worker#%s died.', worker.process.pid);
        cluster.fork();
    });
} else {
    app.listen(PORT, function () {
        console.log('Production Worker#' + process.pid + ' running at localhost:' + PORT)
    });
}


