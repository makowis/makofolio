// @flow
import React from 'react';
import type { Slide } from '../models/Slide';

type Props = {
  slides: Slide[],
};

const Slides = ({ slides }: Props) => (
  <section>
    <h2>Slides</h2>
    {slides.length > 0 && <ul>{slides.map((slide) => <li>{slide.id}</li>)}</ul>}
    {JSON.stringify(slides)}
  </section>
);

export default Slides;
