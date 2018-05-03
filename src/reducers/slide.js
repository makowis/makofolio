// @flow
import type { Slide } from '../models/Slide';

export type State = { slides: Slide[] };

// ActionType
const CHANGE_SLIDES: 'SLIDE/CHANGE_SLIDES' = 'SLIDE/CHANGE_SLIDES';

// ActionCreator
export const changeSlides = (slides: Slide[]) => ({
  type: CHANGE_SLIDES,
  slides,
});

type ChangeSlides = { type: typeof CHANGE_SLIDES, slides: Slide[] };
type Action = ChangeSlides;

const reducer = (state: State = { slides: [] }, action: Action): State => {
  switch (action.type) {
    case CHANGE_SLIDES:
      return { slides: action.slides };
    default:
      return state;
  }
};

export default reducer;
