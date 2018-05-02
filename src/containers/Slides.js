/* eslint-env browser */
// @flow
import { connect } from 'react-redux';

import Component from '../components/Slides';

const slides = ['Sun', 'Mon', 'Tue', 'Wed'];
const mapStateToProps = () => ({
  slides,
});

const Slides = connect(mapStateToProps)(Component);

export default Slides;
