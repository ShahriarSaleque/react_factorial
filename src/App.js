import React, { useState } from "react";

export default function App() {
  const [number, setnumber] = useState(0);

  const factorial = () => {};
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={this.factorial}>
        <input type="number" name="number" placeholder="Enter a number..." />
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {0}</h2>
    </div>
  );
}
