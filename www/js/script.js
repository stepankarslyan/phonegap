/**
 * Why do you put a different name for file and for object?
 * app or script is giving no information on what this code do, choose more descriptive name, that answer what does this object do?
 **/
var app = {
	
	openLocation: function(location) {
		window.location = location;
	},
	
	// Always prefer positive logic -> isOnline is better than isOffline
	isOffline: function () {
		// Can't you find more simple syntax? like
		// return navigator.network.connection.type != Connection.NONE 
		var status;
		var networkState = navigator.network.connection.type;
		
		if (networkState == Connection.NONE) {
			status = true;
		}
		else { status = false; // Don't put code after { but on next line
		}
		
		return status;
	},

	onDeviceReady: function() {
		// load local files if there is not network connection 
		if (app.isOffline()) {
		  app.openLocation("www/offline/index.html"); // Probem with lines or tabs
		}
		else {
			app.openLocation("http://192.168.10.112:8080"); // Put this string in a property of object better than in code
		}
	},
};

document.addEventListener("deviceready", app.onDeviceReady, false);

