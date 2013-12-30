angular.module('app').
// Why do you put service out of service folder?
factory('connectivitySwitchService', function() {

	return {	
	
		switch: function(config) {
			if (this.isOnline()) {
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
			// Why don't you use angular to change view ?
			window.location = location;
		}

	};
	
});



