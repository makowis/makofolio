// @flow
import person from '../models/Person';
import type { Person } from '../models/Person';

export type State = { person: Person };

type Action = { type: 'CHANGE_PERSON', person: Person };

const reducer = (state: State = { person }, action: Action) => {
  switch (action.type) {
    case 'CHANGE_PERSON':
      return { ...state, person: action.person };
    default:
      return state;
  }
};

export default reducer;
