/*var sabreDevStudio = require('sabre-dev-studio');
var sabre_dev_studio = new sabreDevStudio({
    client_id : 'V1:r3ssgptpzjx8w8hn:DEVCENTER:EXT',
    client_secret: '8wPLn7vK',
    uri: 'https://api.test.sabre.com'
});

var options = {};
var callback = function(error, data){
    if(error){
        console.log(error);
    }
    else{
        console.log(JSON.stringify(JSON.parse(data)));

    }
};
sabre_dev_studio.get('/v1/lists/supported/cities', options, callback);
sabre_dev_studio.get('/v1/shop/flights/fares?origin=NYC&departuredate=2015-05-25&returndate=2015-05-30&maxfare=200', options, callback);
*/

(function (){
    'use strict';
    var express = require('express');
    var app = express();
    let portNumber = 3000;

    require('./config/config_app')(app);
    require('./config/config_routes')(app);

    //server credentials start
    console.log('starting the server');
    app.listen(portNumber);
    console.log('started the server at ', portNumber);




})();



