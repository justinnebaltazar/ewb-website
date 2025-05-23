import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from './components/About/About';
import { Banner } from "./components/Banner/Banner";
import { Testimonial } from './components/Testimonial/Testimonial';
import { Contact } from './components/Contact/Contact';
import { News } from './components/News/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects } from './components/Projects/Projects';
import { ProjectPage } from './components/Projects/ProjectPage';
import { Footer } from './components/Footer/Footer';
import { Events } from './components/Events/Events';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page components */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Banner />
              <News />
              <Testimonial />
              <Contact />
              <Footer/>
            </>
          } 
        />

        {/* Events page */}
        <Route 
          path="/events" 
          element={
          <>
          <Navbar />
          <Events/>
          </>} 
        />

        {/* Get involved page  */}
        <Route
          path="/get-involved"
          element={
            <>
              <Navbar/>
              <Projects/> 
              <Footer/>
            </>
          }
        />

        {/* Link to each project page */}
        <Route
          path="/project/:id"
          element={
            <>
              <Navbar/>
              <ProjectPage/>
              <Footer/>
            </>
          }

        />

        {/* Meet the team page */}
        <Route path="/meet-the-team"
        element={
        <>
          <Navbar/>
          <Events/>
          <Footer/>
        </>
      }/>
      </Routes>
    </Router>
    
  );
}

export default App;