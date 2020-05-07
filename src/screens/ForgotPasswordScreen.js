import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { phoneValidator, accountValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';

const ForgotPasswordScreen = ({ navigation }) => {
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [account, setAccount] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const phoneError = phoneValidator(phone.value);
    const accountError = accountValidator(account.value);

    if (phoneError) {
      setPhone({ ...phone, error: phoneError });
      setAccount({ ...account, error: accountError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      <Logo />

      <Header>Restore Password</Header>

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

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
