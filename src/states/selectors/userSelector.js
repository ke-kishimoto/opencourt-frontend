import { selector } from 'recoil';
import { userState, tokenState } from '../atoms/userAtom'

const isLoginState = selector({
  key: 'isLogin',
  get: ({get}) => {
    const user = get(userState)
    if(!user) {
      return false;
    }
    if(Object.keys(user).length) {
      return true;
    }
    return false;
  },
})

const getAccessToken = selector({
  key: 'getAccesToken',
  get: ({get}) => {
    const token = get(tokenState)
    return token;
  },
})

export { isLoginState, getAccessToken }