import { atom } from 'recoil';

const companionsState = atom({
  key: 'companions',
  default: [],
})

export { companionsState }