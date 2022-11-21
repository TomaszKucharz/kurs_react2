import "./App.css";
import Header from "./commponets/Header";
import Users from "./commponets/Users";

const data = [
  {
    id: 1,
    name: "Johan",
    age: 24,
  },
  {
    id: 2,
    name: "Józiu",
    age: 26,
  },
  {
    id: 3,
    name: "Jola",
    age: 28,
  },
];
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
  const persons = [...data].map((person) => (
    <li key={person.id}>{` ${person.name},wiek: ${person.age}`}</li>
  ));
  return persons;
};
function App() {
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
    </div>
  );
}

export default App;
