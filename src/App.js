import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Testimonials />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
