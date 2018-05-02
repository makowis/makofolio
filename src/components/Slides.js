// @flow
import React from 'react';
import type { Slide } from '../models/Slide';

type Props = {
  slides: Slide[],
};

const Slides = ({ slides }: Props) => (
  <section className="text-center text-white bg-warning p-5">
    <h2>Slides</h2>
    {slides.length > 0 && (
      <div className="row">
        {slides.map((slide) => (
          <div className="col-3">
            <span dangerouslySetInnerHTML={{ __html: slide.content.content }} />
          </div>
        ))}
      </div>
    )}
  </section>
);

export default Slides;
