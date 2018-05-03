// @flow
import { combineReducers } from 'redux';

import person from './person';
import slide from './slide';
import type { State as Person } from './person';
import type { State as Slide } from './slide';

// なぜか slideがunusedっていわれる
// noinspection JSUnusedGlobalSymbols
const reducer = combineReducers({ person, slide });

export default reducer;

export type State = { person: Person, slide: Slide };
