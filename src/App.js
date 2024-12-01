import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Iterate() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ol>{listItems}</ol>;
}

function Button() {
  const [count, setCount] = useState(0);
  function EventHandle() {
    alert("I am sunil power");
    setCount(count+1);
  }

  return <button onClick={EventHandle}>Click Me bro</button>;
}

function App() {
  return (
    <div className="App">
      <Iterate />
      <Button />
    </div>
  );
}

export default App;
