/**
 * How much code do you want to put in "app", you shoudl split your code in object/files that have only one responsability
 * We created an object to switch between online and offline, you named it app that is a mistake, the responsability of this code is 
 * not to be the app but to switch between versions, you could choose connectivitySwitch, and then you would not make the mistake 
 * to put geolocation code in the same file / object !!!
 * 
 * ALWAYS THINK TO CREATE OBJECT WITH RESPONSABILITY
 * 
 * like this the code is easy to find, maintain and reuse. This code is not reusable because you mixed subjects
 **/
var app = {
	
	// Did you learn about last code review? What about mixing technical and business code
	// Even more you mix technical, business and presentation by building html all in one function
	// Create one geolocation object file only responsible to get geolocation informations
	// use it in online html
	// and create an main js that will use this object
	// And do what is asked, the goal was to get geolocation and to log it on nodejs SERVER log !!! not on html
	showMyLocation: function() {
		
		var onSuccess = function(position) {
			var element = document.getElementById('geolocation');
			
			element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
				'Longitude: ' + position.coords.longitude + '<br />' +
				'Altitude: ' + position.coords.altitude + '<br />' +
				'Accuracy: ' + position.coords.accuracy + '<br />' +
				'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
				'Heading: ' + position.coords.heading + '<br />' +
				'Speed: ' + position.coords.speed + '<br />' +
				'Timestamp: ' + position.timestamp + '<br />';
		};

		// onError Callback receives a PositionError object
		var onError = function(error) {
				alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	},
	/*
	onlineLocation: "http://192.168.10.112:8080",
	offlineLocation: "www/offline/index.html",
	openLocation: function(location) {
		window.location = location;
	},
	*/
	
	// All this unused code is only because you don't put only one subject in one file / object
	isOnline: function () {
		return navigator.network.connection.type != Connection.NONE;
	},

	onDeviceReady: function() {
		// load local files if there is not network connection 
		if (app.isOnline()) {
		  app.showMyLocation();
		  //app.openLocation(app.onlineLocation);
		}
	/*	else {
			app.openLocation(app.offlineLocation);
		}
	*/
	},
};

document.addEventListener("deviceready", app.onDeviceReady, false);

