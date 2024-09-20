import { useState } from "react";
import { sculptureList } from "./components/Rate.jsx";

export default function Gallery() {
  // Declare a state variable for the current index
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    // ინდექსის გაზრდა და მისი დაბრუნება 0-ზე, თუ ის სიას გადააჭარბებს
    // setIndex((prevIndex) => prevIndex + 1);
    setIndex(index + 1);
  }
  function btn() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>

      <button onClick={btn}> {showMore ? "hide" : "show"} text</button>

      {showMore && <p> TEXT TO TEST HIDE AND SHOW</p>}
    </>
  );
}
