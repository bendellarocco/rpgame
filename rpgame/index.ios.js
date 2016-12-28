/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var rpgame = require('./React/Scenes/Login/LaunchView');


AppRegistry.registerComponent('rpgame', () => rpgame);
