/* eslint-env jest */
// @flow
import extract from './extractFirstImageURL';

it('imgタグのsrcが取り出せる', async () => {
  const url = await extract('<img src="url" >');
  expect(url).toBe('url');
});

it('複数ある場合、最初だけ', async () => {
  const url = await extract('<img src="url" ><img src="url2">');
  expect(url).toBe('url');
});
