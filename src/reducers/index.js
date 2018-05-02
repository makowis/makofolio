// @flow
import person from '../models/Person';
import type { Person } from '../models/Person';
import type { Slide } from '../models/Slide';

export type State = { person: Person, slides: Slide[] };

type Action =
  | { type: 'CHANGE_PERSON', person: Person }
  | { type: 'CHANGE_SLIDES', slides: Slide[] };
const slides = [];

const reducer = (state: State = { person, slides }, action: Action) => {
  switch (action.type) {
    case 'CHANGE_PERSON':
      return { ...state, person: action.person };
    case 'CHANGE_SLIDES':
      return { ...state, slides: action.slides };
    default:
      return state;
  }
};

export default reducer;
