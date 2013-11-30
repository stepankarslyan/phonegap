var app = { // the name of this object should not be app

	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",
	openLocation: function(location) { // let a line before and after function
		window.location = location;
	},
	
	isOnline: function () {
		return navigator.network.connection.type != Connection.NONE;
	},

	onDeviceReady: function() {
		
		if (app.isOnline()) {
		  app.openLocation(onlineLocation); // Put the correct spaces at beginning of line
		}
		else {
			app.openLocation(app.offlineLocation);
		}
	
	},
};

document.addEventListener("deviceready", app.onDeviceReady, false);

