import { Route, Routes } from "react-router-dom";
import "./App.css";
import Orders from "./components/Orders";
import Product from "./components/Product";
import ProductsCreate from "./components/ProductsCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/create" element={<ProductsCreate />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
