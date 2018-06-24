// @flow
import React from 'react';
import {
  TwitterLinkButton,
  FacebookLinkButton,
  GithubLinkButton,
} from './SnsLinkButton';
import type { Person as Model } from '../models/Person';

export const Person = ({
  avatar,
  nickname,
  name,
  twitter,
  facebook,
  github,
}: Model) => (
  <div className="container-fluid bg-info p-5">
    <img
      src={avatar}
      alt={`${nickname}のアイコン`}
      className="rounded-circle mx-auto d-block avater"
    />
    <h1 className="text-center text-white">{name}</h1>
    <section className="mt-3">
      <h2 className="text-center text-white">SNS Links</h2>
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <TwitterLinkButton twitterId={twitter} />
        </li>
        <li className="list-inline-item">
          <FacebookLinkButton facebookId={facebook} />
        </li>
        <li className="list-inline-item">
          <GithubLinkButton githubId={github} />
        </li>
      </ul>
    </section>
  </div>
);

export default Person;
