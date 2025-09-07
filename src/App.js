import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import LoginPage from './components/LoginPage';
import OrdersPage from './components/OrdersPage';
import MenuPage from './components/MenuPage';
import About from './components/assets/About';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order-online" element={<OrdersPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
