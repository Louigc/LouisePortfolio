import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
       <NavbarComp></NavbarComp>
       <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path="/about" component={<About />}></Route>
          <Route path="/portfolio" component={<Portfolio />}></Route>
       </Switch>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
