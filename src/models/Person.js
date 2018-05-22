/* eslint-disable camelcase */
// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { toSpeakerdeckID } from '@makofolio/speakerdeck/models/SpeakerdeckID';
import type { SpeakerdeckID } from '@makofolio/speakerdeck/models/SpeakerdeckID';
import avatar from '../img/avatar.bmp';
import type { GitHubID } from '../github/models/GitHubID';
import { toGitHubID } from '../github/models/GitHubID';
import type { FacebookID } from '../facebook/models/FacebookID';
import { toFacebookID } from '../facebook/models/FacebookID';
import type { TwitterID } from '../twitter/models/TwitterID';
import { toTwitterID } from '../twitter/models/TwitterID';

export type PersonParams = {
  id: string,
  avatar: string,
  nickname: string,
  name: string,
  twitter: string,
  facebook: string,
  github: string,
  speakerdeck?: string,
};

export type Person = {
  id: string,
  avatar: string,
  nickname: string,
  name: string,
  twitter: TwitterID,
  facebook: FacebookID,
  github: GitHubID,
  speakerdeck: ?SpeakerdeckID,
};

const createPerson = ({
  twitter,
  facebook,
  github,
  speakerdeck,
  ...rest
}: PersonParams): Person => ({
  twitter: toTwitterID(twitter),
  facebook: toFacebookID(facebook),
  github: toGitHubID(github),
  speakerdeck: speakerdeck ? toSpeakerdeckID(speakerdeck) : null,
  ...rest,
});

export const mako_wis: Person = createPerson({
  id: 'mako_wis',
  avatar,
  nickname: 'mako_wis',
  name: 'Makoto Henmi',
  twitter: 'mako_wis',
  facebook: 'makoto.henmi',
  github: 'makowis',
  speakerdeck: 'makowis',
});

export const moriC: Person = createPerson({
  id: 'moriC',
  avatar:
    'https://pbs.twimg.com/profile_images/471280957119406080/LCUoaGga_400x400.png',
  nickname: 'もりしー',
  name: 'Tomohiro Morishita',
  twitter: 'CentBoss',
  facebook: 'tomohiro.m0219',
  github: 'moriC',
});

export const eiel: Person = createPerson({
  id: 'eiel',
  avatar:
    'https://pbs.twimg.com/profile_images/2754435592/6fef2556bc06febd5c6ab4c24ae08282_400x400.jpeg',
  nickname: 'eiel',
  name: 'Tomohiko Himura',
  twitter: 'eielh',
  facebook: 'eielh',
  github: 'eiel',
  speakerdeck: 'eiel',
});

export const nyoho: Person = createPerson({
  id: 'Nyoho',
  avatar: 'https://avatars2.githubusercontent.com/u/118150',
  nickname: 'Nyoho',
  name: 'Yukinori Kitadai',
  twitter: 'NeXTSTEP2OSX',
  facebook: 'Nyoho',
  github: 'Nyoho',
  speakerdeck: 'Nyoho',
});

export const persons = { mako_wis, moriC, eiel, nyoho };

export const developers: Person[] = [mako_wis, eiel, nyoho];

export default mako_wis;
