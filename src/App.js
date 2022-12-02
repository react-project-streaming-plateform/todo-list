import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");

  function handleChange(e) {
    console.log("list", list)
    setVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("ici", list)
    const tmpVal = val
    setList([...list, {text: tmpVal, id: uuidv4()}]);
    setVal("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={val} onChange={handleChange} type="text" />
        <button type="submit">Ajouter à la liste</button>
      </form>
        <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
