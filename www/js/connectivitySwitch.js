// Rename the object connectivitySwitch
var app = {

	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",
	openLocation: function(location) { // Always add line before and after function
		window.location = location;
	},
	
	isOnline: function () {
		return navigator.network.connection.type != Connection.NONE;
	},

	// Rename by what the function do not by when the function is called
	// switch: function(config) {...};
	onDeviceReady: function() {
		
		if (app.isOnline()) {
		  app.openLocation(onlineLocation); // Use the same space to indent your code
		}
		else {
			app.openLocation(app.offlineLocation);
		}
	
	},
};

// Move this line of code in index.html with anonymous function
// You can even put a config object that will make the switch object reusable
// document.addEventListener("deviceready", function() {
// 	connectivitySwitch.switch({
//		onlineLocation: "http://192.168.10.112:8080",
// 		offlineLocation: "www/offline/index.html"
//	});
// }, false);
document.addEventListener("deviceready", app.onDeviceReady, false);

