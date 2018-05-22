// @flow
// プロジェクト内に存在するため無効化
// eslint-disable-next-line import/no-extraneous-dependencies
import getImageURL from '@makofolio/html/extractFirstImageURL';
import type { SpeakerdeckID } from '@makofolio/speakerdeck/models/SpeakerdeckID';
import type { Slide } from '../models/Slide';
import type { Entry } from '../api/getSlides';
import apiGetSlides from '../api/getSlides';

// Atomフィード内のエントリーからSlideモデルへ変換する
export const entryToSlide = ({
  content,
  link,
  ...rest
}: Entry): Promise<Slide> =>
  getImageURL(content.content).then((image: string) => ({
    image,
    url: link.href,
    ...rest,
  }));

/**
 * SpeakerdeckのIDからスライドモデルの一覧を取得
 * @param speakerdeck {String}
 * @returns {Promise<[Slide]>}
 */
export const getSlides = (speakerdeck: SpeakerdeckID): Promise<Slide[]> =>
  apiGetSlides(speakerdeck).then((entries) =>
    Promise.all(entries.map(entryToSlide)),
  );

export default getSlides;
