/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import FacebookLinkButton from '../components/SnsLinkButton/FacebookLinkButton';

fontawesome.library.add(brands);

storiesOf('SNSLinkButton', module).add(
  'FacebookLinkButton',
  withNotes('クリックで指定ユーザのFacebookプロフィールへ遷移します。')(() => (
    <div style={{ backgroundColor: '#666', padding: '2em' }}>
      <FacebookLinkButton facebookId="makoto.henmi" />
    </div>
  )),
);
