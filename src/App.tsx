import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState } from 'react';
import FullPizza from './components/FullPizza';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
