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
  getMarketingCloudId : ()  => {
    RNOmniture.getMarketingCloudId((error, response) => {
      console.log(error);
      console.log(response);

      if (error) {
        console.error(error);
      } else {
        return response;
      }
    });
  },
}
