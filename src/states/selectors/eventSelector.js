import { selector } from 'recoil';
import { eventBaseState } from '../atoms/eventAtom';

const getEventBase = selector({
  key: 'getEventBase',
  get: ({get}) => {
    const eventBase = get(eventBaseState)
    return eventBase;
  },
})

export { getEventBase };