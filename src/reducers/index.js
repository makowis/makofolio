// @flow
import person from '../models/Person';
import type { Person } from '../models/Person';

export type State = { person: Person };

const reducer = (state: State = { person }) => state;

export default reducer;
