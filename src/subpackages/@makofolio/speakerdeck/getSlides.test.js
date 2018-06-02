/* eslint-env jest */
// @flow
import mockAxios from 'jest-mock-axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toSpeakerdeckID } from './models/SpeakerdeckID';
import getSlides from './getSlides';

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

it('renders App', async () => {
  const speakerdeckId = toSpeakerdeckID('makowis');
  const res = getSlides(speakerdeckId);
  const entry = ['entry'];
  mockAxios.mockResponse({
    data: {
      query: {
        results: {
          feed: {
            entry,
          },
        },
      },
    },
  });
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://query.yahooapis.com/v1/public/yql',
    {
      params: {
        q:
          "select * from xml where url = 'https://speakerdeck.com/makowis.atom'",
        format: 'json',
      },
    },
  );

  expect(await res).toBe(entry);
});
