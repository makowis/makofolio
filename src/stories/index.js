/* eslint-disable import/no-extraneous-dependencies */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withNotes } from '@storybook/addon-notes';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { toTwitterID } from '@makofolio/twitter/models/TwitterID';

import TwitterLinkButton from '../components/SnsLinkButton/TwitterLinkButton';
import FacebookLinkButton from '../components/SnsLinkButton/FacebookLinkButton';
import { toFacebookID } from '../facebook/models/FacebookID';
import GithubLinkButton from '../components/SnsLinkButton/GithubLinkButton';
import { toGitHubID } from '../github/models/GitHubID';

fontawesome.library.add(brands);

storiesOf('SNSLinkButton', module)
  .addDecorator(
    backgrounds([{ name: 'bg-info', value: '#17a2b8', default: true }]),
  )
  .add(
    'TwitterLinkButton',
    withNotes('クリックで指定ユーザのTwitterへ遷移します。')(() => (
      <TwitterLinkButton twitterId={toTwitterID('mako_wis')} />
    )),
  )
  .add(
    'FacebookLinkButton',
    withNotes('クリックで指定ユーザのFacebookプロフィールへ遷移します。')(
      () => <FacebookLinkButton facebookId={toFacebookID('makoto.henmi')} />,
    ),
  )
  .add(
    'GitHubLinkButton',
    withNotes('クリックで指定ユーザのGithubプロフィールへ遷移します。')(() => (
      <GithubLinkButton githubId={toGitHubID('makowis')} />
    )),
  );
