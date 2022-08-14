import { atom } from 'recoil';

const eventBaseState = atom({
  key:'eventBase',
  default: {},
})

export { eventBaseState };
