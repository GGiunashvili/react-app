import React, { useState } from "react";

const profiles = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: "24",
  },
  {
    id: 2,
    name: "Sara",
    surname: "Cambel",
    age: "34",
  },
];

export default function AppX() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState(profiles); // შეცვლილია 'profile'-ზე

  function handlename(e) {
    e.preventDefault();

    setProfile((prevProfiles) => [
      ...prevProfiles,
      {
        surname,
        age,
        name,
        id: Math.random(),
      },
    ]);
    setName("");
    setSurname("");
    setAge("");
  }

  return (
    <>
      {profile.map((post) => (
        <div
          key={post.id}
          className="post"
          style={{ backgroundColor: "red", marginTop: "20px" }}
        >
          <span>{post.name}</span>
          <h1>{post.surname}</h1>
          <p>{post.age}</p>
        </div>
      ))}

      <form
        onSubmit={handlename}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          name -
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          surname -
          <input
            placeholder="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          age -
          <input
            placeholder="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit" style={{ display: "block" }}>
          submit
        </button>
      </form>
    </>
  );
}
