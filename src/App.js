import React, { useState } from "react";

export default function App() {
  const [number, setnumber] = useState(0);
  const [factorial, setfactorial] = useState(0);

  const submit = e => {
    let i = 1;
    let p = 1;
    while (i <= number) {
      p = p * i;
      i = i + 1;
    }
    setfactorial(p);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form>
        <input
          type="number"
          name="number"
          placeholder="Enter a number..."
          onChange={e => setnumber(e.target.value)}
        />
        <br />
        <button onClick={submit}>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorial}</h2>
    </div>
  );
}
