import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
// import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
// import Footer from './components/footer/footer'




function App() {

return (
    <div className="App">
  < Header/>
  <h2>junior</h2>
<Navbar/>
<About/>
<Experience/>
{/* <Services/> */}
<Portfolio/>
<Testimonial/>
<Contact/>
{/* <Footer/> */}

    </div>
  );
}

export default App;
