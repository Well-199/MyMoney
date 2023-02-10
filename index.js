/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import Main from './src/Pages/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
