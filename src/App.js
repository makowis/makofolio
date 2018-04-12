import React, { Component } from 'react';
import avatar from './avatar.bmp';

class App extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a class="navbar-brand" href="#">mako labo</a>
          </div>
        </header>
        <main>
          <div className="container-fluid bg-info p-5">
            <img src={avatar} alt="mako_wismのアイコン" className="rounded-circle mx-auto d-block"/>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
