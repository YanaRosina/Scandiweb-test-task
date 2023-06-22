import { Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';


function App() {
  return <Routes>
    <Route path='/' element={<AllProducts />} />
    <Route path='add-product' element={<AddProduct />} />
  </Routes>
}

export default App;
