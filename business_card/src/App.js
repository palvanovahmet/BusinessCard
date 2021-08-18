import MainPage from './components/MainPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import NotFound from './components/NotFound';


function App() {
    return(
        <div>
            <Header />
            <Router>
                {/* <Switch> */}
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/about" component={AboutMe} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/services" component={Services} />
                    <Route component={NotFound} />
            {/* </Switch> */}
        </Router>
        <Footer />
        </div>
    );
}

export default App;