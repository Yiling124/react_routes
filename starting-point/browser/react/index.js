import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';
import Artist from './components/Artist'
import Artists from './components/Artists'

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to ="/albums"/>
      <Route path='albums' component ={Albums} />
      <Route path='albums/:albumId' component={Album} />
      <Route path='artists' component={Artists} />
      <Route path='artists/:artistId' component={Artist} />
  </Route>
</Router>,

  document.getElementById('app')
);
