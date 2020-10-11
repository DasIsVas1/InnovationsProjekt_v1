import {createStackNavigator} from "react-navigation-stack";
import SettingsScreenOld from "../Screens/SettingsScreenOld";
import DetailsScreen from "../Screens/DetailsScreen";

const SettingStackNavigation = createStackNavigator(
    {
        Settings: {screen: SettingsScreenOld},
        Details: {screen: DetailsScreen},
    },
    {
        initialRouteName: 'Settings',
        navigationOptions: {
            title: 'Main'
        }
    }
);

export default SettingStackNavigation