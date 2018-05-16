// @flow
import HtmlParser from 'htmlparser2';

type HTML = string;

/**
 * 未パースのHTMLの最初のimgタグのsrcを取り出す関数
 * @param content {String}
 * @returns {Promise<String>}
 */
export const frontCoverImageURL = (content: HTML): Promise<string> =>
  new Promise((resolve, reject) => {
    const parser = new HtmlParser.Parser({
      onopentag(name, attributes) {
        if (name === 'img') {
          resolve(attributes.src);
          this.end();
        }
      },
      onend: reject,
      onerror: reject,
    });

    parser.write(content);
    parser.end();
  });

export default frontCoverImageURL;
