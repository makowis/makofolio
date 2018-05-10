// @flow
import axios from 'axios';

const speakerdeckFeedURL = (speakerdeck: string) =>
  `https://speakerdeck.com/${speakerdeck}.atom`;
const yqlQuery = (url: string) => `select * from xml where url = '${url}'`;
const yqlURL = 'https://query.yahooapis.com/v1/public/yql';

const getSlides = async (speakerdeck: string) =>
  axios
    .get(yqlURL, {
      params: {
        q: yqlQuery(speakerdeckFeedURL(speakerdeck)),
        format: 'json',
      },
    })
    .then((res) => res.data.query.results.feed.entry);

export default getSlides;
