import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Paragraph>
      Welcome to {"\n"}
      Guheshowri Merchant Banking & Finance Limited
    </Paragraph>
    <Header>Mobile Banking</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      ACTIVATE SERVICES
    </Button>
  </Background>
);


export default memo(HomeScreen);
