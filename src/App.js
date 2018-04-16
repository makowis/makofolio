import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import avatar from './img/avatar.bmp';
import './App.css';
import {
  TwitterLinkButton,
  FacebookLinkButton,
  GithubLinkButton,
} from './components/SnsLinkButton/';

fontawesome.library.add(brands);

const App = () => (
  <div>
    <main>
      <div className="container-fluid bg-info p-5">
        <img
          src={avatar}
          alt="mako_wisのアイコン"
          className="rounded-circle mx-auto d-block avater"
        />
        <h1 className="text-center text-white">Makoto Henmi</h1>
        <section className="mt-3">
          <h2 className="text-center text-white">SNS Links</h2>
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <TwitterLinkButton url="https://twitter.com/mako_wis" />
            </li>
            <li className="list-inline-item">
              <FacebookLinkButton url="https://www.facebook.com/makoto.henmi" />
            </li>
            <li className="list-inline-item">
              <GithubLinkButton url="https://github.com/makowis" />
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
);

export default App;
