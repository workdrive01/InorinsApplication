import React from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {ACCOUNTS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const DetailScreen = props => {
  const accountId = props.navigation.getParam('accountId');

  const selectedAccount = ACCOUNTS.find(account => account.id === accountId);

  return (
    <ScrollView>
      {/* <Image source={{uri: selectedAccount.imageUrl}} style={styles.image} /> */}
      <View style={styles.details}>
        <DefaultText>{selectedAccount.duration}m</DefaultText>
        <DefaultText>{selectedAccount.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedAccount.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Items</Text>
      {selectedAccount.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedAccount.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

DetailScreen.navigationOptions = navigationData => {
  const accountId = navigationData.navigation.getParam('accountId');
  const selectedAccount = ACCOUNTS.find(account => account.id === accountId);
  return {
    // headerTitle: selectedAccount.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default DetailScreen;
