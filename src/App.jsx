// import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Service from './Pages/Services/Service';
import Product from './Pages/Expertise/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YorkContactUs from './Pages/ContactUs/ContactUs';

const App = () => {
  return (
    <>   
     <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<YorkContactUs/>}/>

        </Routes>
      </div>
    </BrowserRouter>
      <Footer />
      </>

  );
}

export default App;
