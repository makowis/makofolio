/* eslint-env browser */
// @flow
import { connect } from 'react-redux';

// import type { Dispatch } from 'redux';

import Component from '../components/Slides';
import type { State } from '../reducers/index';

const mapStateToProps = ({ slides }: State) => ({ slides });

/*
// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSlides: (slides) => () => dispatch({ type: 'CHANGE_SLIDES', slides }),
});
*/

// const Slides = connect(mapStateToProps, mapDispatchToProps)(Component);
const Slides = connect(mapStateToProps)(Component);

export default Slides;
