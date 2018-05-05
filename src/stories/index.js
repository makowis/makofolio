/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import FacebookLinkButton from '../components/SnsLinkButton/FacebookLinkButton';

fontawesome.library.add(brands);

storiesOf('SNSLinkButton', module).add('FacebookLinkButton', () => (
  <div>
    <div style={{ backgroundColor: '#666', padding: '2em' }}>
      <FacebookLinkButton facebookId="makoto.henmi" />
    </div>
    <p>クリックで指定ユーザのFacebookプロフィールへ遷移します。</p>
  </div>
));
