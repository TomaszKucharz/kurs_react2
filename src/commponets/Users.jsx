import React from "react";

const Users = ({ people }) => {
  return (
    <>
      <div>Users (druga lista):</div>
      <ul>
        {people.map((user, index) => {
          return (
            <div key={index}>
              <h3>name: {user.name}</h3>
              <h4>age: {user.age}</h4>
            </div>
          );
        })}
      </ul>
      <hr />
    </>
  );
};

export default Users;
