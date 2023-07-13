import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((js) => js.json())
      .then((res) => {
        let ar = [];
        ar.push(res);
        setUser(ar);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(user);
  return (
    <div>
      <div className="container flex justify-center px-20">
        {user.map((item, i) => (
          <div
            className="card bg-green-200 border-2 border-gray-400 m-10 rounded-xl p-5"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
