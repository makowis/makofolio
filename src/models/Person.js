/* eslint-disable camelcase */
// @flow
import avatar from '../img/avatar.bmp';

export type Person = {
  avatar: string,
  nickname: string,
  name: string,
  twitter: string,
  facebook: string,
  github: string,
};

export const mako_wis: Person = {
  avatar,
  nickname: 'mako_wis',
  name: 'Makoto Henmi',
  twitter: 'mako_wis',
  facebook: 'makoto.henmi',
  github: 'makowis',
};

export default mako_wis;
