document.addEventListener("deviceready", onDeviceReady, false);

function checkConnection() {
   var networkState = navigator.network.connection.type;
   return networkState;
};

function onDeviceReady() {
	var networkState = checkConnection();
	// load local files if there is not network connection 
    if (networkState == Connection.NONE) {
	    window.location="www/tamplate/offline.html";
    }
    else {
			 window.location="http://192.168.10.112:8080";
    }
}

