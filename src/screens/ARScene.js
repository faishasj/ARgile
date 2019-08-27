import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene, ViroText, ViroConstants, ViroARSceneNavigator,
} from 'react-viro';

const API_KEY = '149DA9E9-7EBE-40B7-A573-8E6DC2B21D49';

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this.onInitialized = this.onInitialized.bind(this);
  }

  onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World!',
      });
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    return (
      <ViroARSceneNavigator
        apiKey={API_KEY}
        initialScene={{
          scene: () => (
            <ViroARScene onTrackingUpdated={this.onInitialized}>
              <ViroText
                text={this.state.text}
                scale={[.5, .5, .5]}
                position={[0, 0, -1]}
                style={styles.helloWorldTextStyle}
              />
            </ViroARScene>
          ),
        }}
      />
    );
  }
}

module.exports = HelloWorldSceneAR;
