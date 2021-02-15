import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile205357Navigator from '../features/UserProfile205357/navigator';
import Maps205338Navigator from '../features/Maps205338/navigator';
import Settings205316Navigator from '../features/Settings205316/navigator';
import Settings205301Navigator from '../features/Settings205301/navigator';
import NotificationList205300Navigator from '../features/NotificationList205300/navigator';
import Maps205299Navigator from '../features/Maps205299/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile205357: { screen: UserProfile205357Navigator },
Maps205338: { screen: Maps205338Navigator },
Settings205316: { screen: Settings205316Navigator },
Settings205301: { screen: Settings205301Navigator },
NotificationList205300: { screen: NotificationList205300Navigator },
Maps205299: { screen: Maps205299Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
