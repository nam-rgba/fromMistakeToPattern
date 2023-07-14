import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
  function changeV(num) {
    console.log(num);
    setCount((current) => {
      return current + num;
    });
  }
  return (
    <>
      <button onClick={() => changeV(-1)}>-</button>
      {count}
      <button onClick={() => changeV(2)}>+</button>
    </>
  );
}
