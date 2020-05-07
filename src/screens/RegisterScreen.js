import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
  phoneValidator,
  accountValidator,
} from '../core/utils';

const RegisterScreen = ({ navigation }) => {
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [account, setAccount] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const phoneError = phoneValidator(phone.value);
    const accountError = accountValidator(account.value);

    if (accountError || phoneError) {
      setPhone({ ...phone, error: phoneError });
      setAccount({ ...account, error: accountError });
      return;
    }

    navigation.navigate('PageNotFound');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Setup Mobile Banking</Header>

      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />
      <TextInput
        label="Account"
        returnKeyType="done"
        value={account.value}
        onChangeText={text => setAccount({ value: text, error: '' })}
        error={!!account.error}
        errorText={account.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        keyboardType="numeric"
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already activated? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
