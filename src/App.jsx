import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useEffect, useState } from "react";

function App() {
  //First type:
  useEffect(() => {
    console.log("First type of useEffect is called.");
  }, []);

  //Second type:
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Second type of useEffect is called.");
  }, [count]);

  //Third type:
  const [nextCount, setNextCount] = useState(0);
  useEffect(() => {
    console.log("Third type of useEffect is called.");
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h1>{nextCount}</h1>
      <button onClick={() => setNextCount(nextCount + 1)}>+</button>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
