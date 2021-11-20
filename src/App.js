import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AddProduct } from './components';
import { EditProduct } from './pages';
import Product from "./pages/Products";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/edit/:id_product" element={<EditProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
