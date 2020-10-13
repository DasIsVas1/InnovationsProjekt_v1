import {createStackNavigator} from "react-navigation-stack";
import SettingsScreenOld from "./SettingsScreenOld";
import DetailsScreen from "./DetailsScreen";

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