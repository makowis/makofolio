// @flow
import React from 'react';

type Props = {
  slides: string[],
};

const Slides = ({ slides }: Props) => (
  <section>
    <h2>Slides</h2>
    {slides && slides.length > 0 && <ul>{slides.map((d) => <li>{d}</li>)}</ul>}
    {slides}
  </section>
);

export default Slides;
