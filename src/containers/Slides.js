/* eslint-env browser */
// @flow
import { connect } from 'react-redux';

import Component from '../components/Slides';
import type { State } from '../reducers/index';

const mapStateToProps = ({ slides }: State) => ({ slides });

const Slides = connect(mapStateToProps)(Component);

export default Slides;
