document.addEventListener("deviceready", function() {

	if (connectivitySwitch.isOnline()) {
		connectivitySwitch.openLocation(connectivitySwitch.onlineLocation);
	}
	else {
		connectivitySwitch.openLocation(connectivitySwitch.offlineLocation);
	}

	var connectivitySwitch = {
	
		onlineLocation: "http://192.168.10.112:8080",
		offlineLocation: "www/offline/index.html",
	
		openLocation: function(location) { 
			window.location = location;
		},
	
		isOnline: function() {
			return navigator.network.connection.type != Connection.NONE;
		}
	};
}, false);
