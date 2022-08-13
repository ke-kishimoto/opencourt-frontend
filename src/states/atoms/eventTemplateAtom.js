import { atom } from 'recoil';

const eventTemplateState = atom({
  key:'template',
  default: {},
})

export { eventTemplateState };