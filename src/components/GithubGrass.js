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
  </section>
);

export default GithubGrass;
