$(document).ready(function(){
	app.setup(window);
	
	//add the main view
	$("div#content").html(appView.el);
});

var app = new BigBoard();
var appView = new BigBoardView({
	model: app
});

Backbone.emulateHTTP = true;