// @flow
import person from '../models/Person';
import type { Person } from '../models/Person';

const CHANGE_PERSON: 'CHANGE_PERSON' = 'CHANGE_PERSON';

export type State = Person;

type Action = { type: typeof CHANGE_PERSON, person: Person };

const reducer = (state: Person = person, action: Action): State => {
  switch (action.type) {
    case CHANGE_PERSON:
      return action.person;
    default:
      return state;
  }
};

export default reducer;
