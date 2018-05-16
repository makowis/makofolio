// @flow
import axios from 'axios';

const speakerdeckFeedURL = (speakerdeck: string) =>
  `https://speakerdeck.com/${speakerdeck}.atom`;
const yqlQuery = (url: string) => `select * from xml where url = '${url}'`;
const yqlURL = 'https://query.yahooapis.com/v1/public/yql';

export type Entry = {
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

const getSlides = async (speakerdeck: string): Promise<Entry[]> =>
  axios
    .get(yqlURL, {
      params: {
        q: yqlQuery(speakerdeckFeedURL(speakerdeck)),
        format: 'json',
      },
    })
    .then((res) => res.data.query.results.feed.entry);

export default getSlides;
