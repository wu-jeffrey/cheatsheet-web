import React from "react";
import "./App.css";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Home from '../../sections/Home/Home'
import Editor from "../../sections/Editor/Editor";
import NotFound from "../../components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/editor" render={() => <Editor />}/>
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
