/* eslint-disable camelcase */
// @flow

export type Slide = {
  id: string,
  published: string,
  updated: string,
  link: {
    href: string,
    rel: string,
    type: string,
  },
  title: string,
  content: {
    type: string,
    content: string,
  },
};