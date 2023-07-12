import { useState } from "react";
import "./App.css";

import Counter from "./counter";
function App() {
  const [kelly, setKelly] = useState(true);

  return (
    <div>
      {kelly ? <Counter name="kelly" /> : <Counter name="nam" />}
      <br />
      <button
        onClick={() => {
          setKelly((k) => !k);
        }}
      >
        swap
      </button>
    </div>
  );
}

export default App;
