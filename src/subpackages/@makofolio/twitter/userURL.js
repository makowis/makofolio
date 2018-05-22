// @flow
import { toString } from './models/TwitterID';
import type { TwitterID } from './models/TwitterID';

export const userURL = (id: TwitterID) => `https://twitter.com/${toString(id)}`;

export default userURL;
