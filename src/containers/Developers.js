/* eslint-env browser */
// @flow
import { connect } from 'react-redux';

import type { Dispatch } from 'redux';

import Component from '../components/Developers';
import { developers } from '../models/Person';
import { changePerson } from '../reducers/person';
import history from '../history';

const mapStateToProps = () => ({
  people: developers,
});

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = (dispatch: Dispatch) => ({
  // なぜか IDEA に Unusedっていわれる。
  onPersonClick: (person) => () => {
    history.push(`/${person.id}`);
    dispatch(changePerson(person));
  },
});

const Developers = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Developers;
