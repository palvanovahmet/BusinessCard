import './App.css';
import Test from './components/Test.jsx';
import About from './components/About.jsx';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Test}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
