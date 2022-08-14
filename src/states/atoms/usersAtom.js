import { atom } from 'recoil';

const userListState = atom({
  key:'userList',
  default: {},
})

export { userListState };