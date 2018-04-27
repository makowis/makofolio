// @flow
import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import './App.css';
import { Person } from './containers/Person';

fontawesome.library.add(brands);

const App = () => (
  <div>
    <main>
      <Person />
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

export default App;
