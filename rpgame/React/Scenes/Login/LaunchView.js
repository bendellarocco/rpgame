'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Navigator, TouchableHighlight, TouchableWithoutFeedback, AsyncStorage, Platform, Fetch, Linking, Alert } from 'react-native';


var config = require('../../../config/config');
var Actions = require('react-native-router-flux').Actions;
var NavigationScene = require('../Navigation/NavigationView');

var {
  width,
  height,
} = Dimensions.get('window');

height =  (Platform.OS === 'ios') ? height : height;

class LaunchView extends Component{

  login() {
    Actions.homeScreen({});
  }

  render() {
    return (
        <NavigationScene />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height: height,
    alignItems: 'center',
  },

  loginButton: {
    width: width * .5,
    height: 100,
    backgroundColor: 'red'
  }

});

module.exports = LaunchView;
