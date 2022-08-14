import { selector } from 'recoil';
import { userListState } from '../atoms/usersAtom';

const getUserList = selector({
  key: 'getUserList',
  get: ({get}) => {
    const userList = get(userListState)
    return userList;
  },
})

export { getUserList };