var connectivitySwitch = {	

	// Move this in a config param of switch function
	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",
	
	
	// Change this method for 
	/*
	switch: function(config) {
		// using config.onlineLocation and config.offlineLocation	
	},
	*/
	
	onDeviceReady: function() {
		if (connectivitySwitch.isOnline()) {
			// use this.openLocation, if it's not workign it's because you call the function without scope
			// to avoid this don't pass onDeviceReady as parameter but an anonymous function
			// calling connectivitySwitch.onDeviceReady
			connectivitySwitch.openLocation(connectivitySwitch.onlineLocation);
		}
		else {
			// Idem
			connectivitySwitch.openLocation(connectivitySwitch.offlineLocation);
		}
	},

	isOnline: function() {
		// Don't forget debug code when you push
		// One method is to add TODO in your comments when you have something not finished or 
		// not to be pushed and search for this TODO before pushing
		return true //navigator.network.connection.type != Connection.NONE;
	},
	
	openLocation: function(location) { 
		window.location = location;
	}

};

// Move this in index.html
// Use anonymous function to avoid method call without scope
document.addEventListener("deviceready", connectivitySwitch.onDeviceReady, false);

