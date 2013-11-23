var app = {
	
	openLocation: function(location) {
		window.location = location;
	},
	
	isOffline: function () {
		var status;
		var networkState = navigator.network.connection.type;
		
		if(networkState == Connection.NONE) {
			status = true;
		}
		else{ status = false;
		}
		
		return status;
	},

	onDeviceReady: function() {
		// load local files if there is not network connection 
		//var isOffline = app.isOffline();
		if (app.isOffline) {
		  app.openLocation("www/offline/index.html");
		}
		else {
			app.openLocation("http://192.168.10.112:8080");
		}
	},
};

	document.addEventListener("deviceready", app.onDeviceReady, false);

