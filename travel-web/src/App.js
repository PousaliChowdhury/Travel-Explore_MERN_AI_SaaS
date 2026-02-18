import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import { Route, Routes, Navigate} from 'react-router-dom';
import Reviews from './pages/Reviews';
import Packages from './pages/Packages';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Booking from './pages/Booking';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Logout from './pages/Logout';
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import AIChat from "./components/AIChat";

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className='App'>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/booking/:id' element={<Booking/>} />
      <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
      <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
      <Route path="/ai" element={<AIChat />} />

    </Routes>
     
    </div>
  );
}

export default App;
