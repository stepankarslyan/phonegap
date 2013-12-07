var connectivitySwitch = {	
	
	switch: function(config) {
		if (connectivitySwitch.isOnline()) {
			this.openLocation(config.onlineLocation);
		}
		else {
			this.openLocation(config.offlineLocation);
		}
	},

	isOnline: function() {
		return navigator.network.connection.type != Connection.NONE;
	},
	
	openLocation: function(location) { 
		window.location = location;
	}

};


