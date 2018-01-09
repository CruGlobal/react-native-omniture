/**
 * @providesModule
 */
import ReactNative from 'react-native';

var RNOmniture = ReactNative.NativeModules.reactnativeomnitureapi

module.exports = {
  trackAction : (str, obj)  => {
    RNOmniture.trackAction(str, obj)
  },
  trackState : (str, obj)  => {
    RNOmniture.trackState(str, obj)
  },
  loadMarketingCloudId : (callback)  => {
    RNOmniture.getMarketingCloudId((error, response) => {
      callback(response);
    });
  },
  syncMarketingCloudId : (id)  => {
    RNOmniture.syncMarketingCloudId(id)
  },
}
