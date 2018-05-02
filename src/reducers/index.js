// @flow
import person from '../models/Person';
import type { Person } from '../models/Person';

export type State = { person: Person, slides: string[] };

type Action = { type: 'CHANGE_PERSON', person: Person, slides: string[] };
const slides = [];

const reducer = (state: State = { person, slides }, action: Action) => {
  switch (action.type) {
    case 'CHANGE_PERSON':
      return { ...state, person: action.person };
    case 'CHANGE_SLIDES':
      console.log('CHANGE_SLIDES')
      return { ...state, slides: action.slides };
    default:
      return state;
  }
};

export default reducer;
