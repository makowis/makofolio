// @flow
import React, { Children } from 'react';
import type { Node } from 'react';
import type { Slide } from '../models/Slide';

const SlideComponent = ({ id, image, url, title }: Slide) => (
  <a key={id} href={url} className="col-md-4 mb-2">
    <img src={image} alt={`${title} スライド扉`} className="img-fluid" />
    <p className="text-white my-1">{title}</p>
  </a>
);

const Wrapper = ({ children }: { children: Node }) => {
  if (children === null) {
    return null;
  }
  if (Children.count(children) <= 0) {
    return null;
  }
  return <div className="row my-3">{children}</div>;
};

type Props = {
  slides: Slide[],
};

const Slides = ({ slides }: Props) => (
  <section className="text-center text-white bg-warning p-5">
    <h2>Slides</h2>
    <Wrapper>{slides.map(SlideComponent)}</Wrapper>
  </section>
);

export default Slides;
