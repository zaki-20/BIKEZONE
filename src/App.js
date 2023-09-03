import Header from "./components/Header";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import FeaturedProductsPage from "./pages/FeaturedProductsPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import LoginForm from "./pages/LoginForm";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./pages/Loader";
import ContactUs from "./pages/ContactUs";


function App() {
  // Get the current location using useLocation
  const location = useLocation();

  // Conditionally render Header and Footer based on the route path
  const renderHeaderAndFooter = !location.pathname.startsWith("/register") && !location.pathname.startsWith("/login");

  return (
    <>
      {renderHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="featuredproducts" element={<FeaturedProductsPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="contactus" element={ <ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      {renderHeaderAndFooter && <Footer />}
      {/* <Loader /> */}
     

    </>
  );
}

export default App;
