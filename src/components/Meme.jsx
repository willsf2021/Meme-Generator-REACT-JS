import React from "react";
import { useState, useEffect } from "react";
import memeData from "../../memeData";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  useEffect(() => {
    // I've done with ASYNC/AWAIT by API, but was not available (CORS ERROR).
    function getMemes() {
      const res = memeData;
      setAllMemes(res.data.memes);
    }
    getMemes();
  }, []);

  function generateMeme(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    // console.log(allMemes);
    const url = allMemes[randomNumber].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text">
            Top Text
            <input
              onChange={handleChange}
              id="top-text"
              className="form--input"
              type="text"
              placeholder="Top text"
              name="topText"
            />
          </label>
        </div>
        <div>
          <label htmlFor="bottom-text">
            Bottom Text
            <input
              onChange={handleChange}
              name="bottomText"
              id="bottom-text"
              className="form--input"
              type="text"
              placeholder="Bottom text"
            />
          </label>
        </div>
        <button onClick={generateMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="container--img">
        <p className="topText">{meme.randomImage && meme.topText}</p>
        <img className="main--img" src={meme.randomImage} alt="" />
        <p className="bottomText">{meme.randomImage && meme.bottomText}</p>
      </div>
    </main>
  );
}
