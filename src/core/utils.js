export const usernameValidator = username => {

  if (!username || username.length <= 0) return 'Username cannot be empty.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const phoneValidator = phone => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!phone || phone.length <= 0) return 'Phone number cannot be empty.';
  if (!re.test(phone)) return 'We need a valid phone number.';

  return '';
};

export const accountValidator = account => {
  const re = /^\d{16}$/;

  if (!account || account.length <= 0) return 'Account number cannot be empty.';
  if (!re.test(account)) return 'We need a valid account number.';

  return '';
};
