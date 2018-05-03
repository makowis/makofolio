// @flow
import type { Slide } from '../models/Slide';

export type State = { slides: Slide[] };

const CHANGE_SLIDES: 'CHANGE_SLIDES' = 'CHANGE_SLIDES';

type Action = { type: typeof CHANGE_SLIDES, slides: Slide[] };

const reducer = (state: State = { slides: [] }, action: Action): State => {
  switch (action.type) {
    case CHANGE_SLIDES:
      return { slides: action.slides };
    default:
      return state;
  }
};

export default reducer;
