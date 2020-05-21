import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M  from 'materialize-css/dist/js/materialize.min.js'
import BusinessState from './context/business/BusinessState'

import Home from '../src/components/pages/Home';
import Business from '../src/components/pages/Business';


const App = () => {

  useEffect(()=>{ 
    //Init Materalize Js
    M.AutoInit();
  });

  return (
    <BusinessState>
        <Router>
          <Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/:id' component={Business}/>
          </Switch>  
          </Fragment>
      </Router>
    </BusinessState>
  );
}

export default App;
