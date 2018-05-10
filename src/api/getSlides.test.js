/* eslint-env jest */
// @flow
import nock from 'nock';
import getSlides from './getSlides';

it('renders App', () => {
  const speakerdeckId = 'makowis';
  nock('https://query.yahooapis.com')
    .get('/v1/public/yql')
    .query({
      q: "select * from xml where url = 'https://speakerdeck.com/makowis.atom'",
      format: 'json',
    })
    .reply(200, { query: { results: { feed: { entry: [] } } } });
  getSlides(speakerdeckId);
});
