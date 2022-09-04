import { selector } from 'recoil';
import { userState, tokenState } from '../atoms/userAtom';

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

const isSystemAdminState = selector({
  key: 'isSystemAdmin',
  get: ({get}) => {
    const user = get(userState)
    if(user.role_level === 'system_admin') {
      return true;
    }
    return false;
  }
})

const isAdminState = selector({
  key: 'isSystemAdmin',
  get: ({get}) => {
    const user = get(userState)
    if(user.role_level === 'system_admin' || user.role_level === 'event_admin') {
      return true;
    }
    return false;
  }
})

const getUser = selector({
  key: 'getUser',
  get: ({get}) => {
    const user = get(userState)
    return user;
  },
})

const getAccessToken = selector({
  key: 'getAccesToken',
  get: ({get}) => {
    const token = get(tokenState)
    return token;
  },
})

export { isLoginState, getAccessToken, getUser, isSystemAdminState, isAdminState}