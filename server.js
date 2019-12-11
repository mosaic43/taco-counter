//Write a server that keeps track of a counter! 
//Initialize a global variable that holds the count (starting at 0). 
//Write three routes called POST /increment, POST /decrement, and GET /value. 
//The first two should increment and decrement the value respectively and then respond with the new counter value. 
//The third route should just respond with the current value. 
//Again, verify that your server works with Postman.

var express = require('express'); 
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var counter = { data: 0 }

app.get('/api/value/', function(request, response, next){
    response.send(counter) 
})

app.post('/api/increment', function(request, response, nextFn){
    counter.data++
    response.send(counter) 
})

app.post('/api/decrement', function(request, response, nextFn){
    counter.data--
    response.send(counter) 
})

app.post('/api/reset', function(request, response, nextFn){
    counter.data = 0
    response.send(counter) 
    })

app.listen(3098, function(){
        console.log('Listening on port 3098')
    })