import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Route, Routes, useLocation } from "react-router-dom";
import FeaturedProductsPage from "./pages/FeaturedProductsPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import LoginForm from "./pages/LoginForm";


function App() {
  // Get the current location using useLocation
  const location = useLocation();

  // Conditionally render Header and Footer based on the route path
  const renderHeaderAndFooter = !location.pathname.startsWith("/register");
  return (
    <>
      {renderHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/featuredproducts" exact element={<FeaturedProductsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      {renderHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
