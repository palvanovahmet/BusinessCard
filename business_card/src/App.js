import MainPage from './components/MainPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/about" component={AboutMe}/>
            </Switch>
        </Router>
    );
}

export default App;