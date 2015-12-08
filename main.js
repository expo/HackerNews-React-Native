'use strict';

var React = require('react-native');

var {
  AppRegistry
} = React;

var app = require('./index');

AppRegistry.registerComponent('HackerNews', () => app);
AppRegistry.registerComponent('main', () => app);
