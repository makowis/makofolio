// @flow
import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import './App.css';
import {
  TwitterLinkButton,
  FacebookLinkButton,
  GithubLinkButton,
} from './components/SnsLinkButton/';
import person from './models/Person';

import type { Person } from './models/Person';

fontawesome.library.add(brands);

const App = ({ avatar, nickname, name, twitter, facebook, github }: Person) => (
  <div>
    <main>
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
      <section className="text-center p-5">
        <h2>Info</h2>
        <p>
          このサイトはポートフォリオというよりReactで何か作ってみようと思ってはじめた実験サイトです。
        </p>
        <p>
          ソースコードは
          <a href="https://github.com/makowis/makowis-portfolio">Github</a>
          で公開しています。
        </p>
      </section>
      <section className="text-center text-white bg-info p-5">
        <h2>Special Thanks</h2>
        <a href="https://github.com/eiel" className="h3">
          eiel
        </a>
      </section>
    </main>
  </div>
);

export default () => App(person);
