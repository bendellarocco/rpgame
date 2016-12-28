'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Navigator, TouchableHighlight, TouchableWithoutFeedback, AsyncStorage, Platform, Fetch, Linking, Alert } from 'react-native';

var config = require('../../../config/config');
var Actions = require('react-native-router-flux').Actions;

var {
  width,
  height,
} = Dimensions.get('window');

class HomeScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user: 0,
      x: 0,
      y: 0,
      visibleX: 0,
      visibleY: 0,
    };
  }

  componentWillMount() {
    var tempState = this.state;
    tempState.visibleX = parseInt(width / 50);
    tempState.visibleY = parseInt(height / 50);

    this.setState({tempState});
  }

  panUp() {
    var tempY = this.state.y + this.state.visibleY;
    this.setState({y: tempY})
  }

  panDown() {
    var tempY = this.state.y - this.state.visibleY;
    this.setState({y: tempY})
  }

  panLeft() {
    var tempX = this.state.x - this.state.visibleX;
    this.setState({x: tempX})
  }

  panRight() {
    var tempX = this.state.x + this.state.visibleX;
    this.setState({x: tempX})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panUp} >
          <TouchableHighlight onPress={this.panUp.bind(this)}>
            <Text>Up</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.panDown} >
          <TouchableHighlight onPress={this.panDown.bind(this)}>
            <Text>Down</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.panLeft} >
          <TouchableHighlight onPress={this.panLeft.bind(this)}>
            <Text>Left</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.panRight} >
          <TouchableHighlight onPress={this.panRight.bind(this)}>
            <Text>Right</Text>
          </TouchableHighlight>
        </View>
        <Text>Total X: {this.state.visibleX}</Text>
        <Text>Total Y: {this.state.visibleY}</Text>
        <Text>X: {this.state.x}</Text>
        <Text>Y: {this.state.y}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },

  panUp: {
    position: 'absolute',
    top: height * .05,
    left: width * .5,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },

  panDown: {
    position: 'absolute',
    bottom: height * .05,
    left: width * .5,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },

  panLeft: {
    position: 'absolute',
    top: height * .5,
    left: width * .05,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },

  panRight: {
    position: 'absolute',
    top: height * .5,
    right: width * .05,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },

});

module.exports = HomeScreen;
