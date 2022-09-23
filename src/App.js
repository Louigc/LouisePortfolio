import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <>
       <NavbarComp></NavbarComp>
       <Home></Home>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
