import React from "react";
import "./App.css";

//router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/home";
import Nopage from "./pages/nopage";
import Users from "./pages/users";
import User from "./pages/user";

function App() {
  return (
    <div className="w-full">
      <Router>
        <header className="flex w-full justify-center bg-green-200">
          <Link className=" m-2  p-2" to="/">
            Home
          </Link>
          <Link className=" m-2 p-2" to="/users">
            Users
          </Link>
          {/* <Link className=" m-2 p-2" to="/route1">
            Route2
          </Link> */}
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/users/:id" exact element={<User />} />
          {/* <Route path="/route1" exact element={<Store />} />
          <Route path="/route2" exact element={<Store />} /> */}
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
