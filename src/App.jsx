

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
 // Import your ProHeader
import HomePage from './Components/Home/Home'; 
import SignUp from './Components/SignUP/SignUp';
import LogIn from './Components/LogIn/LogIn'; 
import './App.css';
import Profile from './Components/Home/Profile/Profile';
import Wishlist from './Components/wishlist/wishlist';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import MyAccount from './Components/Account/Account';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import ProductDetails from './Components/ProductDetails/ProductDetails';




// Component to handle conditional header rendering
const AppContent = () => {
  const location = useLocation();
  
  // Check if current path is profile
  const isProfilePage = location.pathname === '/profile';
  
  return (
   <div className=" ">
      {/* Conditional Header Rendering */}
       <Header />
       <div className="flex flex-col mx-[10px] max-sm:mx-3 sm:mx-4 md:mx-[10px] xl:mx-[10px] jxl:mx-0 lg:mx-[10px] ">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Error />} />
        <Route path="/details" element={<ProductDetails />} />


        
       
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App