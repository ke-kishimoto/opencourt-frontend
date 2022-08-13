import { atom } from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

const userState = atom({
  key: 'user',
  default: {},
  effects: [
    localStorageEffect('login_user'),
  ]
});

const tokenState = atom({
  key: 'accessToken',
  default: '',
  effects: [
    localStorageEffect('access_token'),
  ]
})

export { userState, tokenState };