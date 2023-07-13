import "./App.css";
import { useRef } from "react";

function App() {
  const emailRef = useRef();
  const passRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passRef.current.value,
    });
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="email" id="email" />
      <label htmlFor="pass">Password</label>
      <input type="password" id="pass" ref={passRef} />
      <button type="submit">login</button>
    </form>
  );
}

export default App;
