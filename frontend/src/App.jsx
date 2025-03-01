import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import { MantineProvider } from "@mantine/core";
import NotFound from "./components/Common/NotFound";
import Loader from "./components/Common/Loader";
import { lazy, Suspense } from "react";
import Form from "./components/auth/Form";
import ProtectedRoute from "./utils/ProtectedRoutes";
// import Premium from './Pages/Premium';

import { CartProvider } from "./components/cart/CartContext";
import { Toaster } from "react-hot-toast";
import Cart from "./Pages/Cart";
import Trace from "./Pages/Trace";

function App() {
  const About = lazy(() => import("./Pages/About"));
  const OrderPlantsPage = lazy(() => import("./Pages/OrderPlantsPage"));
  const ExplorePlants = lazy(() => import("./Pages/ExplorePlants"));
  const Mentors = lazy(() => import("./Pages/Mentors"));
  const Home = lazy(()=>import("./Pages/Home"))
  return (
    <MantineProvider>
      <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/order-plants"  element={<ProtectedRoute element={<OrderPlantsPage/>}/>} />
              <Route path="/explore-plants" element={<ProtectedRoute element={<ExplorePlants />}/>} />
              <Route path="/mentors" element={<ProtectedRoute element={<Mentors />}/>} />
              <Route path="/cart" element={<ProtectedRoute element={<Cart />}/>} />
              <Route path="/trace" element={<ProtectedRoute element={<Trace />}/>} />
              <Route path="/auth" element={<Form />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route path="/premium" element={<Premium />} /> */}
            </Routes>
          </Suspense>
        </MainLayout>
        </CartProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

function MainLayout({ children }) {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/auth";

  return (
    <div className="bg-black min-h-[100vh] text-white flex flex-col">
      <Toaster/>
      {!hideNavAndFooter && <Navbar />}
      <div className="flex-grow">{children}</div>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
