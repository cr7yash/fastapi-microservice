import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import ProductsCreate from "./components/ProductsCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/create" element={<ProductsCreate />} />
    </Routes>
  );
}

export default App;
