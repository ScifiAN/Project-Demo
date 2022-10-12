import './App.css';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path='/main' element={<Main />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/products/:productId' element={<ProductDetail />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
