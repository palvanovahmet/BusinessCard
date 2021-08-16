import './App.css';
import MainPage from './components/MainPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Contacts from './components/Contacts';
// import Header from './components/Header';


import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Switch> */}
        {/* <Route path="/" component={Header}/> */}
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contacts" component={Contacts}/>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
