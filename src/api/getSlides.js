// @flow
import axios from 'axios';

const requestURL = (speakerdeck: string) =>
  `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fspeakerdeck.com%2F${speakerdeck}.atom'&format=json`;

type Entry = {
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
    .get(requestURL(speakerdeck))
    .then((res) => res.data.query.results.feed.entry);

export default getSlides;
