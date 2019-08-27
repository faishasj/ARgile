/** App Constants */

export const DEFAULT_USER = {
  loggedIn: false,
  profile: {
    email: '',
    firstName: '',
    lastName: '',
  },
  settings: {
    enableNotifications: false,
  },
};

export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';

export const COLOURS = {
  primary: '#00A2FF',
  primaryGradientLight: '#00D1FF',
  primaryGradientDark: '#0078FF',

  black: '#000000',
  white: '#ffffff',
  darkGray: '#333333',
  lightWhite: '#ffffffAC',
  lightBlack: '#0000004C',
  darkBlack: '#0000008C',
  buttonLight: '#fffafa',
  facebookButton: '#4267b2',
};

export default {
  DEFAULT_USER,
  SUCCESS,
  FAILED,
  COLOURS,
};
