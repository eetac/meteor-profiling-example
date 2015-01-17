// MeteorDown Script
mdown.init(function (Meteor) {
  var i = 0;
  Meteor.subscribe('publicLists', function () {
    //console.log('publiLists is ready');
    //console.log(Meteor.collections.lists);

    Meteor.subscribe("todos","nt7QzdfcwfwzDRfEs", function() {
	var o = Meteor.collections.todos;
        var keys = Object.keys(o);
	//console.log(keys);
	var todos_length = keys.length;
	//console.log(todos_length);
	var randomN = Math.floor((Math.random() * (todos_length-1)) + 0);
	//console.log(randomN);
	var randomKey = keys[randomN];
	//console.log(randomKey);
        //console.log(Meteor.collections.todos);
	setTimeout(function() {
		if(Meteor.collections.todos[randomKey].checked){
			Meteor.call("/todos/update", {"_id":randomKey}, {"$set":{"checked":false}}, function (err, res) {
				//console.log("Updated to false")
 		 	});
		}else{
			Meteor.call("/todos/update", {"_id":randomKey}, {"$set":{"checked":true}}, function (err, res) {
				//console.log("Updated to true")
 		 	});
		}
		setTimeout(function() {
			Meteor.kill();
		},1000);
	}, 1000);
    });	    
  });
//method":"/todos/update","params":[{"_id":"Zn2RPhbFEqidhpwFf"},{"$set":{"checked":false}}

});

mdown.run({
  concurrency: 50,
  url: 'http://localhost:3000',
  key: undefined,
  auth: undefined
});

