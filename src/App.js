import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSuccess from "./components/SuccessLog/LoginSuccess";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Homepage from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import LoginFailed from "./components/LoginFailed/LoginFailed";
import { AuthUserRoute, PrivateRoute } from "./hoc/PrivateRoute";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/myaccount" element={<AuthUserRoute><MyAccount /></AuthUserRoute>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoginSuccess" element={<LoginSuccess />} />
          <Route path="/LoginFailed" element={<LoginFailed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
