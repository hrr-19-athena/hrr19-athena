var express = require('express');

var app = express();

app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});


//server will need to get users personality data upon authentication
