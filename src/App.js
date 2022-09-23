import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Home from './Components/Home';
import About from './Components/About';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <>
       <NavbarComp></NavbarComp>
        <Router>
          <Switch>
              <Route path='/' exact component={Home}/>  
              <Route path="/about" component={About}/> 
              <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </Router>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
