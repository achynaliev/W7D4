import React from 'react';
import ReactDOM from 'react-dom';
import { catchAllPokemons } from './util/api_util';
import { receiveAllPokemons, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import { HashRouter, Route } from 'react-router-dom';

import Root from './components/root_component';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  window.catchAllPokemons = catchAllPokemons;
  window.receiveAllPokemons = receiveAllPokemons;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;

  ReactDOM.render(
    <Root store={store} />, rootEl);
});
