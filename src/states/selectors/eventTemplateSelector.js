import { selector } from 'recoil';
import { eventTemplateState } from '../atoms/eventTemplateAtom';

const getEventTemplate = selector({
  key: 'getEventTemplate',
  get: ({get}) => {
    const template = get(eventTemplateState)
    return template;
  },
})

export { getEventTemplate };