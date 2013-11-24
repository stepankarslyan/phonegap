var app = {

	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",
	openLocation: function(location) {
		window.location = location;
	},
	
	isOnline: function () {
		return navigator.network.connection.type != Connection.NONE;
	},

	onDeviceReady: function() {
		// load local files if there is not network connection 
		if (app.isOnline()) {
		  app.openLocation(app.onlineLocation);
		}
		else {
			app.openLocation(app.offlineLocation);
		}
	},
};

document.addEventListener("deviceready", app.onDeviceReady, false);

