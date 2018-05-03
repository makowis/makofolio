// @flow
import defaultPerson from '../models/Person';
import type { Person } from '../models/Person';

export type State = Person;

// ActionType
const CHANGE_PERSON: 'PERSON/CHANGE_PERSON' = 'PERSON/CHANGE_PERSON';

// ActionCreator
export const changePerson = (person: Person) => ({
  type: CHANGE_PERSON,
  person,
});

type ChangePerson = { type: typeof CHANGE_PERSON, person: Person };

type Action = ChangePerson;

const reducer = (state: Person = defaultPerson, action: Action): State => {
  switch (action.type) {
    case CHANGE_PERSON:
      return action.person;
    default:
      return state;
  }
};

export default reducer;
