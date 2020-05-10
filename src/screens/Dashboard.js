import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import GridTile from '../components/GridTile';

const Dashboard = props => {
  const renderGridItem = itemData => {
    return (
      <GridTile
        // title={itemData.item.title}
        // color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'PageNotFound',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data="rerere"
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

Dashboard.navigationOptions = navData => {
  return {
    headerTitle: 'Dashboard Categories',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
