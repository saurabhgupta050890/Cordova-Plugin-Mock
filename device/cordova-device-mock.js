var device = device || (function () {
    'use strict';
    
    var _device = {};
    
    _device.platform = 'browser';
    
    _device.cordova = 6.3;
    
    _device.model = navigator.appCodeName || "Browser";
    
    _device.version = getVersion();
    
    _device.manufacturer = navigator.vendor || "Google Inc.";
    
    _device.isVirtual = false;
    
    _device.serial = _device.uuid = getBrowserSerial();
    
    function getVersion() {
        var version = navigator.appVersion || '1.0';
        if(typeof version === 'string') {
            version = version.match(/\d+[.]*\d*/)[0];
        }
        return version;
    }
    
    function getBrowserSerial() {
        var browserInfo = navigator.userAgent;
        browserInfo += navigator.platform || "";
        browserInfo += navigator.appName || "";
        browserInfo += getVersion();
        browserInfo += navigator.appCodeName || "";
        browserInfo += navigator.oscpu || "";
        browserInfo += navigator.vendor || "";
        browserInfo += navigator.vendorSub || "";
        browserInfo += navigator.product || "";
        browserInfo += navigator.productSub || "";
        
        return getHash(browserInfo);
    }
    
    function getHash(str){
        var hash = 0;
        if (str.length == 0) return hash;
        for (var i = 0; i < str.length; i++) {
            var character = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return btoa(hash);
    }
    
    
    return _device;
}());