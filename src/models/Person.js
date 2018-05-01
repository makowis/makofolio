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

export const moriC: Person = {
  avatar:
    'https://pbs.twimg.com/profile_images/471280957119406080/LCUoaGga_400x400.png',
  nickname: 'もりしー',
  name: 'Tomohiro Morishita',
  twitter: 'CentBoss',
  facebook: 'tomohiro.m0219',
  github: 'moriC',
};

export const persons = { mako_wis, moriC };

export default mako_wis;
