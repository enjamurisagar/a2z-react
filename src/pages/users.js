import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([{}]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(users);
  return (
    <div>
      <h1 className="text-center my-2">
        Users, data fetched from{" "}
        <a
          href="https://dummyjson.com/users"
          target="_blank"
          rel="noreferrer"
          className=" text-blue-500 cursor-pointer"
        >
          https://dummyjson.com/users
        </a>
      </h1>
      <div className="container grid grid-cols-3 px-20">
        {users?.map((item, i) => (
          <Link
            to={`/users/${item.id}`}
            className="card bg-green-200 border-2 border-gray-400  m-10 cursor-pointer rounded-xl hover:scale-95 ease-in duration-300"
            key={i}
          >
            <div className="image flex justify-center">
              <img src={item.image} alt="userimage" width={150} />
            </div>
            <div className="data p-2">
              <p>userId: {item.id}</p>
              <p>First Name: {item.firstName}</p>
              <p>Last Name: {item.lastName}</p>
              <p>age: {item.age}</p>
              <p>Email: {item.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
