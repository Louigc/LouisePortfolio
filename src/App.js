import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Home from './Components/Home';
import About from './Components/About';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
       <NavbarComp></NavbarComp>
          <Switch>
              <Route exact path="/">
                <Home />
                </Route>  
              <Route exact path="/about"> 
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
                </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
          </Switch>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
