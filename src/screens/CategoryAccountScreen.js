import React from 'react';

import {CATEGORIES, ACCOUNTS} from '../data/dummy-data';
import AccountList from '../components/AccountList';

const CategoryAccountScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedAccounts = ACCOUNTS.filter(
    account => account.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <AccountList listData={displayedAccounts} navigation={props.navigation} />
  );
};

CategoryAccountScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryAccountScreen;
