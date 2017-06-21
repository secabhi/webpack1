var api = require('./api.js')
var $ = require('jquery');
var users = api.getusers();

$.each(users,function(index,user){
    $(document.body).append("<p> name = "+user.name+"age = "+user.age+"</p>")
})

