import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';

import { COLOURS } from '../../lib/constants';

/* *********** STYLES ************ */

const styles = StyleSheet.create({
  text: {
    color: COLOURS.darkGray,
    fontSize: 15,
    fontWeight: 'normal',
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

/* ********** COMPONENT ********** */

const Text = ({
  title, subtitle, children, style, ...props
}) => (
  <RNText
    style={[styles.text, title && styles.title, subtitle && styles.subtitle, style]}
    allowFontScaling={false}
    {...props}
  >
    {children}
  </RNText>
);

/* ************ PROPS ************ */

Text.propTypes = {
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
};

Text.defaultProps = {
  title: false,
  subtitle: false,
  children: '',
  style: {},
};

export default Text;
