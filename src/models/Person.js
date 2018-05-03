/* eslint-disable camelcase */
// @flow
import avatar from '../img/avatar.bmp';

export type Person = {
  id: string,
  avatar: string,
  nickname: string,
  name: string,
  twitter: string,
  facebook: string,
  github: string,
};

export const mako_wis: Person = {
  id: 'mako_wis',
  avatar,
  nickname: 'mako_wis',
  name: 'Makoto Henmi',
  twitter: 'mako_wis',
  facebook: 'makoto.henmi',
  github: 'makowis',
};

export const moriC: Person = {
  id: 'moriC',
  avatar:
    'https://pbs.twimg.com/profile_images/471280957119406080/LCUoaGga_400x400.png',
  nickname: 'もりしー',
  name: 'Tomohiro Morishita',
  twitter: 'CentBoss',
  facebook: 'tomohiro.m0219',
  github: 'moriC',
};

export const eiel: Person = {
  id: 'eiel',
  avatar:
    'https://pbs.twimg.com/profile_images/2754435592/6fef2556bc06febd5c6ab4c24ae08282_400x400.jpeg',
  nickname: 'eiel',
  name: 'Tomohiko Himura',
  twitter: 'eielh',
  facebook: 'eielh',
  github: 'eiel',
};

export const nyoho: Person = {
  id: 'Nyoho',
  avatar: 'https://avatars2.githubusercontent.com/u/118150',
  nickname: 'Nyoho',
  name: 'Yukinori Kitadai',
  twitter: 'NeXTSTEP2OSX',
  facebook: 'Nyoho',
  github: 'Nyoho',
};

export const persons = { mako_wis, moriC, eiel, nyoho };

export const developers: Person[] = [mako_wis, eiel, nyoho];

export default mako_wis;
