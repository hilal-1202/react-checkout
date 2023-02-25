import React from "react";
const CardTotal = () => {
  return (
    <div className="container w-50 border mt-5">
      <p className="border-buttom p-2 d-felx justify-content-between">
        <span style={fontWeight}>Subtotal</span>
        <span>11</span>
      </p>
      <p className="border-buttom p-2 d-felx justify-content-between">
        <span>Tax(18%)</span>
        <span>22</span>
      </p>
      <p className="border-buttom p-2 d-felx justify-content-between">
        <span>Shipping</span>
        <span>33</span>
      </p>
      <p className="border-buttom p-2 d-felx justify-content-between">
        <span>Total</span>
        <span>44</span>
      </p>
    </div>
  );
};
