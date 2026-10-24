import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Infrastructure from './pages/Infrastructure';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import CategoryProducts from './pages/CategoryProducts';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ScrollToTopButton from './components/common/ScrollToTopButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: '28px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          
          {/* Hierarchical Category Routes */}
          <Route path="/products/strip-in-pipe/:material" element={<CategoryProducts />} />
          <Route path="/products/strip-in-pipe/:material/:productId" element={<ProductDetail />} />
          <Route path="/products/rod-in-pipe/:material" element={<CategoryProducts />} />
          <Route path="/products/rod-in-pipe/:material/:productId" element={<ProductDetail />} />
          <Route path="/products/solid-rod/:material" element={<CategoryProducts />} />
          <Route path="/products/solid-rod/:material/:productId" element={<ProductDetail />} />
          <Route path="/products/lightning-arrestors" element={<CategoryProducts />} />
          <Route path="/products/lightning-arrestors/:productId" element={<ProductDetail />} />
          <Route path="/products/specialty" element={<CategoryProducts />} />
          <Route path="/products/specialty/:productId" element={<ProductDetail />} />

          {/* Universal Category & Product Routes */}
          <Route path="/products/:category/:material/:productId" element={<ProductDetail />} />
          <Route path="/products/:category/:material" element={<CategoryProducts />} />
          <Route path="/products/:id" element={<CategoryProducts />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
