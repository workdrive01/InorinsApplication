import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import AccountItem from './AccountItem';

const AccountList = props => {
  const renderAccountItem = itemData => {
    return (
      <AccountItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectAccount={() => {
          props.navigation.navigate({
            routeName: 'AccountDetail',
            params: {
              accountId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderAccountItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default AccountList;
