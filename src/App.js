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
const functionMap = () => {
  // console.log(data);
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
      <Users />
    </div>
  );
}

export default App;
