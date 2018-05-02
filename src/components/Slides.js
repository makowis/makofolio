// @flow
import React from 'react';

type Props = {
  slides: string[],
};

const Slides = ({ slides }: Props) => (
  <ul>{slides.map((d) => <li>{d}</li>)}</ul>
);

export default Slides;
