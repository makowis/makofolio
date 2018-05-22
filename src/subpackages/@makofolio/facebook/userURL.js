// @flow
import { toString } from './models/FacebookID';
import type { FacebookID } from './models/FacebookID';

export const userURL = (id: FacebookID) =>
  `https://www.facebook.com/${toString(id)}`;

export default userURL;
