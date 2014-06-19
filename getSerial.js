// chrome.usb.getDevices(enumerateDevicesOptions, callback);

function onDeviceFound(devices) {
  this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
      console.log(devices);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }
}
var vendorId = 2341;
var productId = 0043;
chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, onDeviceFound);