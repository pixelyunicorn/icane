cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-ble.BLE",
    "file": "plugins/cordova-plugin-ble/ble.js",
    "pluginId": "cordova-plugin-ble",
    "clobbers": [
      "evothings.ble"
    ]
  },
  {
    "id": "cordova-plugin-eddystone.eddystoneplugin",
    "file": "plugins/cordova-plugin-eddystone/js/eddystone-plugin.js",
    "pluginId": "cordova-plugin-eddystone",
    "clobbers": [
      "evothings.eddystone"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-ble": "2.0.1",
  "cordova-plugin-eddystone": "1.3.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.1"
};
// BOTTOM OF METADATA
});