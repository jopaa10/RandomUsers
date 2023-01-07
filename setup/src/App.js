import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useFetch } from "./hooks/useFetch";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  //const [laoding, setLoading] = useState(true);
  const { loading, person, getRandomPerson, setLoading } = useFetch();

  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  console.log(person, loading);

  const getUserOnClick = () => {
    if (loading) return;
    getRandomPerson();
    let loadingUser = false;
    setLoading(loadingUser);
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      {!loading && (
        <div className="block">
          <div className="container">
            <img
              src={person.image || defaultImage}
              alt="random user"
              className="user-img"
            />
            <p className="user-title">my {title} is</p>
            <p className="user-value">{value}</p>
            <div className="values-list">
              <button
                className="icon"
                data-label="name"
                onMouseOver={handleValue}
              >
                <FaUser />
              </button>
              <button
                className="icon"
                data-label="email"
                onMouseOver={handleValue}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="age"
                onMouseOver={handleValue}
              >
                <FaCalendarTimes />
              </button>
              <button
                className="icon"
                data-label="street"
                onMouseOver={handleValue}
              >
                <FaMap />
              </button>
              <button
                className="icon"
                data-label="phone"
                onMouseOver={handleValue}
              >
                <FaPhone />
              </button>
              <button
                className="icon"
                data-label="password"
                onMouseOver={handleValue}
              >
                <FaLock />
              </button>
            </div>
            <button className="btn" type="button" onClick={getUserOnClick}>
              {loading ? "loading..." : "random user"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
