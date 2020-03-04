import React from 'react';
import  Header  from './common/header'
import { HashRouter , Route } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
  <HashRouter>
  	<Header></Header>
  	<Route path='/' exact component={Home}></Route>
  	<Route path='/login' exact component={Login}></Route>
  	<Route path='/write' exact component={Write}></Route>
  	<Route path='/detail' exact component={Detail}></Route>
  </HashRouter>
  );
}

export default App;
