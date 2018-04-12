import React, { Component } from 'react';
import avatar from './avatar.bmp';
import './App.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)


class App extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="container-fluid bg-info p-5">
            <img src={avatar} alt="mako_wisのアイコン" className="rounded-circle mx-auto d-block avater"/>
            <h1 className="text-center text-white">Makoto Henmi</h1>
            <section className="mt-3">
              <h2 className="text-center text-white">SNS Links</h2>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://twitter.com/mako_wis" className="circle_fl ftw">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/makoto.henmi" className="circle_fl ffb">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/makowis" className="circle_fl fgithub">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </li>
              </ul>

            </section>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
