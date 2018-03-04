import ReactNative from 'react-native';
import Index from '../index.ios.js';

jest.mock('react-native', () => ({
    NativeModules: { reactnativeomnitureapi: { trackState: jest.fn() } }
}))

it('renders correctly', () => {

    Index.trackState();
});
