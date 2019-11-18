import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/components/HomeScreen";
import ProfileScreen from "./src/components/ProfileScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
