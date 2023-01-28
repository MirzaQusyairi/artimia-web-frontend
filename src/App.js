import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";
import LiveMonitoring from "./components/LiveMonitoring";
import UserList from "./pages/UserList";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/live" element={<LiveMonitoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
