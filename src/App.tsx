import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Tracking from './pages/Tracking';
import Locations from './pages/Locations';
import Awards from './pages/Awards';
import News from './pages/News';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="locations" element={<Locations />} />
        <Route path="awards" element={<Awards />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
