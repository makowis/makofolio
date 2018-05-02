// @flow
import React from 'react';
import type { Slide } from '../models/Slide';
import { slide as className } from './Slides.css';

type Props = {
  slides: Slide[],
};

const Slides = ({ slides }: Props) => (
  <section className="text-center text-white bg-warning p-5">
    <h2>Slides</h2>
    {slides.length > 0 && (
      <div className="row my-3">
        {slides.map((slide) => (
          <a href={slide.link.href} className="col mb-2">
            <span
              dangerouslySetInnerHTML={{ __html: slide.content.content }}
              className={className}
            />
            <p className="text-white my-1">{slide.title}</p>
          </a>
        ))}
      </div>
    )}
  </section>
);

export default Slides;
