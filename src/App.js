import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Menu from './component/menu/menu'
import Home from './component/home/home'
import CallToServer from './callToServer'
import History from './component/about/history'
import About from './component/about/about'
import Mode from './component/about/mode'
import Reasons from './component/about/reasons'

import store from './component/store'
import Prodducs from './component/products/producs'
import ShowPoductsBought from './component/products/IntroducingProducts'
import AllProducts from './component/products/payment'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu />
          <Switch>

            <Route path='/home'>
              <Home />
              <Menu />
            </Route>

            <Route path='/about'>
              <About>
                {/* <About/> */}
                <Reasons />
                <History />
                <Mode />
              </About>
            </Route>

            <Route path='/producs'>
              <Prodducs />
            </Route>

            <Route path='/addedProducts'>
              <ShowPoductsBought></ShowPoductsBought>
            </Route>

            <Route path='/poductsBought'>
              <addedProducts />
            </Route>

            <Route path='/toEnd'>
              <AllProducts />
            </Route>
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;