import React, { Component } from 'react';

import './Header.styles.css';

export default class Header extends Component {
  render() {
    return (
      <div className="home">
        <div className="overlay" />
        <div className="content">
          <section>
            <span className="tag">Science Fiction</span>
            <h1>Godzilla vs. Kong</h1>
            <p>
              In a time when monsters walk the Earth, humanity&apos;s fight for its
              future sets Godzilla and Kong on a collision course that will see
              the two most powerful forces of nature on the planet collide in a
              spectacular battle for the ages.
            </p>

            <a href="/image/star.svg">
              Watch now
            </a>
          </section>
        </div>
      </div>
    );
  }
}
