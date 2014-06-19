chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });

});

var transferInfo = {
  "direction": "in",
  "endpoint": 1,
  "length": 2560
};

var isoTransferInfo = {
  "transferInfo": transferInfo,
  "packets": 20,
  "packetLength": 128
};

var onDeviceFound = function (devices) {
  console.log("onDeviceFound", devices);
  this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
      console.log(devices);
      var device = devices[0];
      window.device = device;
      chrome.usb.openDevice(device, onOpenDevice);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }
}


var onOpenDevice= function(connectionHandle) {
  console.log('in onOpenDevice');

  if (connectionHandle) {
   // console.dir(connectionHandle);
   console.log("Device opened.");
    // transferData(connectionHandle)
                                // device           setttings         cb
    chrome.usb.isochronousTransfer(connectionHandle, isoTransferInfo,randomCallback);
//console.dir(chrome.usb.isochronousTransfer(connectionHandle, isoTransferInfo));
} else {
  console.log("Device failed to open.");
}
}
var randomCallback=function(isoTransferInfo){
  console.dir(isoTransferInfo);
  console.dir(ArrayBuffer(isoTransferInfo));
}

console.dir(chrome.usb);
var vendorId = 9025;
var productId = 67;
chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, onDeviceFound);

