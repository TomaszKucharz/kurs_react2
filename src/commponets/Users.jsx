import React from "react";

const Persons = [
  {
    id: 1,
    name: "Anton",
    age: 12,
  },
  {
    id: 2,
    name: "Ala",
    age: 126,
  },
  {
    id: 3,
    name: "Johana",
    age: 23,
  },
];
const functionMapTwo = () => {
  const People = [...Persons].map((user) => (
    <li key={user.id}>{` ${user.name}, wiek: ${user.age}`}</li>
  ));
  return People;
};
const Users = () => {
  return (
    <>
      <div>Users (druga lista):</div>
      <ul>{functionMapTwo()}</ul>
      <hr />
    </>
  );
};

export default Users;
