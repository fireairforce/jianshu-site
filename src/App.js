import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home/index';
import Details from './pages/details/loadable.js';
import Login from './pages/login/index';
import Write from './pages/write/index';
import store from './store/index';

class App extends Component {
  render() {
    return (
        <Provider store={store}>  
            <BrowserRouter>
              <div>
              <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/write' exact component={Write}></Route>
                <Route path='/detail/:id' exact component={Details}></Route>
              </div>
            </BrowserRouter>
        </Provider>  
     
    );
  }
}

export default App;
