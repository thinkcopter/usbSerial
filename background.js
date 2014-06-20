chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 400,
            'height': 500
        }
    });

});


var onConnect = function(connectionInfo) {
    console.log('in onConnect');

    console.dir(this);
    console.dir(_this);
    // The serial port has been opened. Save its id to use later.
    console.dir(connectionInfo.connectionId);
    //_this.connectionId = connectionInfo.connectionId;
    // Do whatever you need to do with the opened port.

}
// Connect to the serial port /dev/ttyACM0
chrome.serial.connect("/dev/ttyACM0", {
    bitrate: 115200
}, onConnect);

//chrome.serial.getDevices(onGetDevices);

/*var onGetDevices = function(ports) {
    console.log('in onGetDevices');
    for (var i = 0; i < ports.length; i++) {
        console.log(ports[i].path);
    }
}
*/
