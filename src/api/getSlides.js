// @flow
import axios from 'axios';

const requestURL = (speakerdeck: string) =>
  `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fspeakerdeck.com%2F${speakerdeck}.atom'&format=json`;

const getSlides = async (speakerdeck: string) =>
  axios
    .get(requestURL(speakerdeck))
    .then((res) => res.data.query.results.feed.entry);

export default getSlides;
