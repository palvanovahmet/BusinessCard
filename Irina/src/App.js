import './App.css';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Service from './components/Service.jsx';
import Contacts from './components/Contacts.jsx';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contacts" component={Contacts}/>
      </Switch>
    </Router>
  );
}

export default App;
