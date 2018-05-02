/* eslint-env browser */
// @flow
import { connect } from 'react-redux';

import type { Dispatch } from 'redux';

import Component from '../components/Developers';
import { developers } from '../models/Person';

const mapStateToProps = () => ({
  people: developers,
});

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = (dispatch: Dispatch) => ({
  // なぜか IDEA に Unusedっていわれる。
  onPersonClick: (person) => () => {
    // TODO react-router を導入すれば削除できるので、直接扱う
    window.history.pushState(null, person.name, `/${person.id}`);
    dispatch({ type: 'CHANGE_PERSON', person });
  },
});

const Developers = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Developers;
