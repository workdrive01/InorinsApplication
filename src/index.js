import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  PageNotFound,
  DetailScreen,
  CategoryAccountScreen,
  AccountsScreen,
  FavouritesScreen,
  FiltersScreen,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    PageNotFound,
    DetailScreen,
    CategoryAccountScreen,
    AccountsScreen,
    FavouritesScreen,
    FiltersScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
