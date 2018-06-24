// @flow
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Person from './containers/Person';
import Developers from './containers/Developers';
import GithubGrass from './containers/GithubGrass';
import Slides from './containers/Slides';
import ChangePersonHandler from './containers/ChangePersonHandler';

library.add(fab);

const App = () => (
  <div>
    <main>
      <Person />
      <section className="text-center p-5">
        <h2>Info</h2>
        <p>
          このサイトはReactで何か作ってみようと思ってはじめた実験サイトです。
        </p>
        <p>
          ソースコードは
          <a href="https://github.com/makowis/makowis-portfolio">GitHub</a>
          で公開しています。
        </p>
      </section>
      <GithubGrass />
      <Slides />
      <section className="text-center text-white bg-info p-5">
        <h2>Developers</h2>
        <Developers />
      </section>
    </main>
    <ChangePersonHandler />
  </div>
);

export default App;
