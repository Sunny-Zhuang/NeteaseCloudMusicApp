import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/home";
import User from './pages/user'
import Music from './pages/music'
import Footer from './components/footer'
import { GlobalCSS } from './style'
import { BrowserRouter, Route } from 'react-router-dom';
import {GlobalIcon} from './static/iconfront/iconfont'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Footer />
          <Route path='/' exact component={Home}></Route>
          <Route path='/music' exact component={Music}></Route>
          <Route path='/user' exact component={User}></Route>
      </div>
    </BrowserRouter>
    <GlobalCSS />
    <GlobalIcon />
  </React.StrictMode>,
  document.getElementById("root")
);

