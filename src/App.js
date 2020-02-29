import React from 'react';
import Wrapper from "./components/Wrapper";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Wrapper}/>
            <Route path="/:name" component={MoreInfo}/>
          </Switch>

        </div>
      </Router>

  );
}

export default App;
