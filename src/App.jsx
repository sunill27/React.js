import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sunil");

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>

      <h2>Hello {name}</h2>

      <button
        onClick={() => {
          setName("Cypher");
        }}
      >
        Change Name
      </button>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
