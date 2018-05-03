// @flow
import { connect } from 'react-redux';

import Component from '../components/Slides';
import type { State } from '../reducers/index';

const mapStateToProps = ({ slide }: State) => slide;

const Slides = connect(mapStateToProps)(Component);

export default Slides;
