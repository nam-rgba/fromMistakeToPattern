import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
