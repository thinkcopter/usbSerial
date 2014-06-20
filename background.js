chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 400,
            'height': 500
        }
    });

});

var onGetDevices = function(ports) {
    console.log('in onGetDevices');
    for (var i = 0; i < ports.length; i++) {
        console.log(ports[i].path);
    }
}

chrome.serial.getDevices(onGetDevices);
