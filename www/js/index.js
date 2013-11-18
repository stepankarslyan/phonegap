/**
 * General comments
 * - Don't give meaningless filename, index.js is not clear, prefer 
 *   main.js for a file that will bootstrap some other classes or libraries
 * - Don't put specific technical code in a main js file, but in a specific library
 *   and if possible in a object responsible for one task
 **/
document.addEventListener("deviceready", onDeviceReady, false);

function checkConnection() {
	var networkState = navigator.network.connection.type;

	// Where is used states variable?
	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.NONE]     = 'No network connection';

	return networkState;  
};

function onDeviceReady() {

	// Replace by a method named isOnline() that return a boolean
	// and call it directly in if
	// if (isOnline()) {...
	var networkState = checkConnection();

	/* load local files if there is not network connection */
	// Prefer the use of inline comment with // than block comments /* */
	// except if you really need a block of comment
	if (networkState == Connection.NONE) {
		// Be carefull with syntax var = "...";
		// Don't forget spaces ans use tab at beginning of line
		window.location="www/template/offline.html";		
	}
	else {
		// Prefer the use of variables declared at beginning of code
		// ex : offlineUrl = "..."; 
		// onlineUrl = "...";
		window.location="http://192.168.1.4:8080";
	}
}
