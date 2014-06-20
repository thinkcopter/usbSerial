console.log('HIHIHIHI');


function onDeviceFound(devices) {
    console.log('in onDeviceFound');
    this.devices = devices;
    if (devices) {
        if (devices.length > 0) {
            console.log("Device(s) found: " + devices.length);
            console.log(devices);
        } else {
            console.log("Device could not be found");
        }
    } else {
        console.log("Permission denied.");
    }
}

chrome.usb.getDevices({
    "vendorId": vendorId,
    "productId": productId
}, onDeviceFound);

var onGetDevices = function(ports) {
    console.log('in onGetDevices');
    for (var i = 0; i < ports.length; i++) {
        console.log(ports[i].path);
    }
}

var vendorId = 2341;
var productId = 0043;

chrome.usb.getDevices(enumerateDevicesOptions, callback);

chrome.serial.getDevices(onGetDevices);