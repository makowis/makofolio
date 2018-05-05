// @flow
import { connect } from 'react-redux';

import Component from '../components/GithubGrass';
import type { State } from '../reducers/index';

const mapStateToProps = ({ person }: State) => person;

const GithubGrass = connect(mapStateToProps)(Component);

export default GithubGrass;
