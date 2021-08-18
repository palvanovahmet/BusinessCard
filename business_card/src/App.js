import MainPage from './components/MainPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
    return(
        <Router>
            {/* <Switch> */}
                <Route path="/" component={Header} />
                <Route exact path="/" component={MainPage} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/Contacts" component={Contacts} />
                <Route path="/" component={Footer} />
            {/* </Switch> */}
        </Router>
    );
}

export default App;