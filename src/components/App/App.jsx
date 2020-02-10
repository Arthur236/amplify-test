import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../Footer';
import Home from '../Home';
import Navbar from '../Navbar';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Welcome from '../Welcome';
import VerifyEmail from '../VerifyEmail';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar/>

          <div id="page-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/welcome" component={Welcome}/>
              <Route exact path="/verify" component={VerifyEmail}/>
            </Switch>
          </div>

          <Footer/>
        </>
      </Router>
    </div>
  );
}

export default App;
