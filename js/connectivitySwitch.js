var connectivitySwitch = {	

	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",

	onDeviceReady: function() {
		if (connectivitySwitch.isOnline()) {
			connectivitySwitch.openLocation(connectivitySwitch.onlineLocation);
		}
		else {
			connectivitySwitch.openLocation(connectivitySwitch.offlineLocation);
		}
	},

	isOnline: function() {
		return true //navigator.network.connection.type != Connection.NONE;
	},
	
	openLocation: function(location) { 
		window.location = location;
	}

};

document.addEventListener("deviceready", connectivitySwitch.onDeviceReady, false);

