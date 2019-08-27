import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, ImageBackground, StyleSheet, Alert, StatusBar,
} from 'react-native';

import Logo from '../../assets/logo/logo.png';
import LandingPageBackground from '../../assets/landingPage/landingPage.png';
import RaisedButton from '../components/RaisedButton';
import Text from '../components/Text';

/* *********** STYLES ************ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
});

/* ********* FUNCTIONS *********** */

function signupButtonFunc() {
  Alert.alert('You tapped the button!');
}

/* ********** COMPONENT ********** */

class LandingPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginButtonFunc = this.loginButtonFunc.bind(this);
  }

  loginButtonFunc() {
    const { navigation } = this.props;
    navigation.push('ARScene');
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={LandingPageBackground}>
        <StatusBar barStyle="light-content" />
        <View style={styles.item} />
        <View style={styles.titleContainer}>
          <Image source={Logo} />
          <Text subtitle>Enabling Agile teams with AR</Text>
        </View>
        <View style={styles.item}>
          <RaisedButton onPress={this.loginButtonFunc} label="Login" primary />
          <RaisedButton onPress={signupButtonFunc} label="Sign Up" primary={false} />
        </View>
      </ImageBackground>
    );
  }
}

/* ************ PROPS ************ */

LandingPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default LandingPage;
