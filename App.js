import { createAppContainer, createStackNavigator } from 'react-navigation';

import ARScene from './src/screens/ARScene';
import LandingPage from './src/screens/LandingPage';

const App = createAppContainer(createStackNavigator({
  LandingPage,
  ARScene,
}, { headerMode: 'none' }));

export default App;
