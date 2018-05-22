// @flow
import { toString } from './models/SpeakerdeckID';
import type { SpeakerdeckID } from './models/SpeakerdeckID';

export const feedURL = (id: SpeakerdeckID) =>
  `https://speakerdeck.com/${toString(id)}.atom`;

export default feedURL;
