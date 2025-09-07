import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Hero />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
