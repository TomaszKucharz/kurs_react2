import "./App.css";
import Header from "./commponets/Header";
import Users from "./commponets/Users";
import Button from "@mui/material/Button";
import React, { useState } from "react";

// const txxt = "Tomek";
const people = [
  {
    name: "Anton",
    age: 12,
  },
  {
    name: "Ala",
    age: 126,
  },
  {
    name: "Johana",
    age: 23,
  },
  {
    name: "Mućka",
    age: 29,
  },
  {
    name: "Doha",
    age: 31,
  },
  {
    name: "Fiona",
    age: 33,
  },
  {
    name: "Marek",
    age: 19,
  },
  {
    name: "Eustachy",
    age: 32.5,
  },
];
const functionMap = () => {
  const data = [
    {
      id: 1,
      name: "Johan",
      age: 24,
    },
  ];
  const persons = [...data].map((person) => (
    <li key={person.id}>{` ${person.name},wiek: ${person.age}`}</li>
  ));
  return persons;
};
const handleClick = () => {
  return console.log(`rx`);
};
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Header />
      <hr />
      <h2>Hello Tomek!</h2>
      <hr />
      <p>users:</p>
      <ul>{functionMap()}</ul>
      <hr />
      <Users people={people} />
      <Button variant="contained" onClick={handleClick}>
        Click
      </Button>
      <br />
      <Button variant="contained">Contained</Button>
      <br />
      <Button variant="contained">Contained</Button>
      <br />
      <input
        type="number"
        id="info"
        placeholder="add age"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <label htmlFor="info">
        {inputValue ? `your age is: ${inputValue} years` : `musisz podać wiek!`}
      </label>
      <br />
    </div>
  );
}

export default App;
