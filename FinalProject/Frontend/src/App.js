import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Loginn from './pages/Loginn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { useSelector } from "react-redux";
import 
{ BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './components/About';
import Blog from './pages/Blog';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/:category" element={<ProductList/>} />
          <Route exact path="/product/:id" element={<Product/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/loginn" element={<Loginn/>} />
          {user && <Route path="/" element={<Navigate to="/" />} />}
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
