import { useState } from "react";
// import Counter from "../src/Counter";
import "./App.css";
// import { useEffect } from "react";
// import { useRef } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const fullName = `${firstName} ${lastName}`; //this way render 1

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`); //=====>This way re-render 2 times
  // }, [lastName, firstName]);
  return (
    <>
      <input
        type="text"
        name="first"
        id="fn"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        name="last"
        id="ln"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <p>{fullName}</p>
    </>
  );
}

export default App;
