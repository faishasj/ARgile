import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';
import { COLOURS } from '../../lib/constants';

/* *********** STYLES ************ */

const styles = StyleSheet.create({
  primaryButtonContainer: {
    borderWidth: 0,
    elevation: 1,
    shadowColor: COLOURS.black,
    shadowOffset: { height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonContainer: {
    alignSelf: 'center',
    borderColor: COLOURS.primary,
    borderRadius: 25,
    borderWidth: 3,
    margin: 8,
    maxWidth: 320,
    minWidth: 300,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    padding: 5,
  },
  disableContainer: {
    opacity: 0.4,
  },
  primaryText: {
    color: COLOURS.white,
    fontSize: 16,
  },
  secondaryText: {
    color: COLOURS.primary,
    fontSize: 16,
  },
});

/* ********** COMPONENT ********** */

const RaisedButton = ({
  label, onPress, primary, style, disable,
}) => (
  <TouchableOpacity
    onPress={disable ? null : onPress}
    style={[styles.buttonContainer, primary && styles.primaryButtonContainer, style]}
    accessibilityComponentType="button"
    accessibilityHint={label}
  >
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={primary
        ? [COLOURS.primaryGradientLight, COLOURS.primaryGradientDark]
        : [COLOURS.white, COLOURS.white]}
      style={[styles.button, disable && styles.disableContainer]}
    >
      <Text title style={{ ...(primary ? styles.primaryText : styles.secondaryText) }}>
        {label}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

/* ************ PROPS ************ */

RaisedButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  primary: PropTypes.bool,
  style: PropTypes.shape(),
  disable: PropTypes.bool,
};

RaisedButton.defaultProps = {
  label: '',
  onPress: null,
  primary: true,
  style: {},
  disable: false,
};

export default RaisedButton;
