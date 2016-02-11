'use strict';

var express    = require('express'),
    http       = require('http'),
    path       = require('path'),
    app        = express(),
    bodyParser = require('body-parser'),
    port       = process.env.PORT || 9000;


/* EXPRESS CONFIGURATION
 **********************************************************************/

app.set('port', port);
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));


/* ROUTES
 **********************************************************************/

app.get('/', function(req, res){
  res.redirect('/*.html');
});

/* START SERVER
**********************************************************************/

app.listen(port);