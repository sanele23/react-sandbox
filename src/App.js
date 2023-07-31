import { useState } from "react";

export default function App() {
  // create state
  const [advice, setAdvice] = useState("");

  // fetch data from API and display data
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
