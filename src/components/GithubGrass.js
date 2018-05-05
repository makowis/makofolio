// @flow
import React from 'react';
import type { Person as Model } from '../models/Person';

export const GithubGrass = ({ github }: Model) => (
  <section className="text-center text-white bg-primary p-5">
    <h2>GitHub Grass Graph</h2>
    <img
      src={`https://grass-graph.moshimo.works/images/${github}.png`}
      alt="GitHub Grass Graph"
      className="img-fluid"
    />
    <p>
      <a href="https://grass-graph.moshimo.works">
        <span className="text-white">image from Grass-Graph</span>
      </a>
    </p>
  </section>
);

export default GithubGrass;
