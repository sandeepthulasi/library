import { useState } from "react";
import User from "./User.jsx";
import Navbar from "./navbar.jsx";

const App = () => {
  const [users, setusers] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });
  const { name, email } = user;

  const inputhandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const Createuser = () => {
    if (user.name === "" || user.email === "") {
    } else {
      users.find((u) => u.id === user.id)
        ? users.splice(users.indexOf(user), 1, user)
        : setusers((prevState) => [
            ...prevState,
            { id: Math.random().toString(36), ...user },
          ]);
      setUser({ name: "", email: "" });
    }
  };
  const Deleteuser = (idx) => {
    const currentuser = users;
    const i = currentuser.filter((user) => user.id !== idx);
    console.log(i);
    setusers(i);
  };
  const Edituser = (idx) => {
    const currentuser = users;
    const i = currentuser.find((user) => user.id === idx);
    setUser(i);
  };
  console.log(users);
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="app flex-col justify-center items-center w-96">
        <form action="" className="flex flex-col p-2 bg-blue-300 rounded m-3">
          <input
            type="text"
            value={name}
            name="name"
            onChange={inputhandler}
            className="p-3 rounded m-1"
            placeholder="FullName"
            required
          />
          <input
            type="email"
            value={email}
            name="email"
            onChange={inputhandler}
            className="p-3 rounded m-1"
            placeholder="Email Address"
            required
          />
          <button
            type="button"
            onClick={Createuser}
            className="bg-red-500 p-3 rounded m-1 text-white "
          >
            Update table
          </button>
        </form>
      </div>
      <div className="titledis border-b-2 p-3">
        Users will be Displayed Below
      </div>
      <div className="display flex justify-center">
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            Edituser={Edituser}
            Deleteuser={Deleteuser}
          />
        ))}
      </div>
    </div>
  );
};
export default App;