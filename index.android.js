/**
 * @providesModule
 */
import ReactNative from 'react-native';

var RNOmniture = ReactNative.NativeModules.omnitureImplementation

module.exports = {
  trackAction : (str, obj)  => {
    RNOmniture.trackAction(str, obj)
  },
  trackState : (str, obj)  => {
    RNOmniture.trackState(str, obj)
  },
  loadMarketingCloudId : (callback)  => {
    RNOmniture.getMarketingCloudId(
      () => {
        callback(null);
      },
      (id) => {
        callback(id);
      }
    );
  },
  syncIdentifier : (id)  => {
    RNOmniture.syncIdentifier(id)
  },
  collectLifecycleData : (obj)  => {
    RNOmniture.collectLifecycleData(obj)
  },
}
