import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import AccountList from '../components/AccountList';
import {ACCOUNTS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const favAccounts = ACCOUNTS.filter(
    account => account.id === 'm1' || account.id === 'm2',
  );
  return <AccountList listData={favAccounts} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
