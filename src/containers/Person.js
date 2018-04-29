// @flow
import { connect } from 'react-redux';
import Component from '../components/Person';
import type { State } from '../reducers/index';

const mapStateToProps = ({ person }: State) => person;

const Person = connect(mapStateToProps)(Component);

export default Person;
