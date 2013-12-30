angular.module('app').
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
			window.location = location;
		}

	};
	
});



