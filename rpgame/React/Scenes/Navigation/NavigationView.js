'use strict';

import React, { Component } from 'react';
import { Navigator, StyleSheet,Text,View, AsyncStorage, Dimensions, Platform } from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

var LaunchView = require('../Login/LaunchView');
var HomeScreen = require('../Home/HomeScreen');

var { width, height } = Dimensions.get('window');

export default class MassTuning extends Component{

  render() {
    return (
    <View style={styles.navWrapper}>
      <View style={styles.router}>
        <Router hideNavBar={true}>
          <Scene key="root">

            <Scene key="homeScreen" component={HomeScreen} type="replace" title="HomeScreen" initial={true}/>
          </Scene>
        </Router>
      </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: 'column',
    flex:1,
    backgroundColor: 'black'
  },
  router: {
    flex: 11,
  },
  navbar: {
    flex: 1,

  },
  adSpaceContainer: {
    height: (Platform.OS === 'ios') ? height * .066 : height * .1,
    position: 'absolute',
    bottom: (Platform.OS === 'ios') ? height * .102 : height * .070,
  }
});

module.exports = MassTuning;
