/* eslint-disable import/no-extraneous-dependencies */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withNotes } from '@storybook/addon-notes';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import FacebookLinkButton from '../components/SnsLinkButton/FacebookLinkButton';

fontawesome.library.add(brands);

storiesOf('SNSLinkButton', module)
  .addDecorator(
    backgrounds([{ name: 'bg-info', value: '#17a2b8', default: true }]),
  )
  .add(
    'FacebookLinkButton',
    withNotes('クリックで指定ユーザのFacebookプロフィールへ遷移します。')(
      () => <FacebookLinkButton facebookId="makoto.henmi" />,
    ),
  );
