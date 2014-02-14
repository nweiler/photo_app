/**
 * Module dependencies.
 * New comment
 * Referencing issue #5 via commit message
 * Closing issue #5 via commit message
 * Creating new branch feature2
 * Creating new branch feature3 for pull request
 * New branch for hotfix issue #9
 * Trying again for issue 11
 * Attempting trello commit hooki
 * Again...
 * Yet again...
 * This just worked on Trello
 * Re-testing trello commits 
*/

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var photos = require('./routes/photos');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('photos', __dirname + '/public/photos');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', photos.list);
app.get('/users', user.list);
app.get('upload', photos.form);
app.post('upload', photos.submit(app.get('photos')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
