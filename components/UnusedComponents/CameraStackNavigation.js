import {createStackNavigator} from "react-navigation-stack";
import SettingsScreenOld from "../Screens/SettingsScreenOld";
import DetailsScreen from "../Screens/DetailsScreen";
import CameraScreen from "../Screens/CameraScreen";

const CameraStackNavigation = createStackNavigator(
    {
        Camera: {screen: CameraScreen},
        Details: {screen: DetailsScreen},
    },
    {
        initialRouteName: 'Camera',
        navigationOptions: {
            title: 'Main'
        }
    }
);

export default CameraStackNavigation