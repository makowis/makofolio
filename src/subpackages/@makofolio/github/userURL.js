// @flow
import { toString } from './models/GitHubID';
import type { GitHubID } from './models/GitHubID';

export const userURL = (id: GitHubID) => `https://github.com/${toString(id)}`;

export default userURL;
