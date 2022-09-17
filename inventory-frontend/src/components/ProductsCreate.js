import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const ProductsCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: { "Contet-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        quantity,
      }),
    });

    await navigate(-1);
  };
  return (
    <Wrapper>
      <form className="mt-3" onSubmit={Submit}>
        <div className="form-floating pb-3">
          <input
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

        <div className="form-floating pb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Price</label>
        </div>

        <div className="form-floating pb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>Quantity</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary">Submit</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
