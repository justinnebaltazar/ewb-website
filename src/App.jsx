import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from './components/About/About';
import { Banner } from "./components/Banner/Banner";
import { Testimonial } from './components/Testimonial/Testimonial';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Banner/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
