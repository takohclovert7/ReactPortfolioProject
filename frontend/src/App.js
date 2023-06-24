import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
// import Button from "./components/uploads/test"




function App() {

return (
    <div className="App">
<Navbar/>
< Header/>
<About />
<Experience/><br /><br /><br /><br /><br />
<Services/>
{/* <Button/> */}
<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
