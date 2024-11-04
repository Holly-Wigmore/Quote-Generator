import React, { useState } from "react";
import Axios from "axios";
import "./Quote.css";
import TypeIt from "typeit-react";

export default function Quote(props) {
  let [clicked, setClicked] = useState(false);
  let [quote, setQuote] = useState(props.quote);
  let [author, setAuthor] = useState(props.author);

  function handleResponse(response) {
    console.log(response.data.a);
    setQuote(response.data.quote);
    setAuthor(response.data.author);
  }

  function fetchQuote() {
    let apiUrl = "https://quoteslate.vercel.app/api/quotes/random";
    Axios.get(apiUrl).then(handleResponse);
    setClicked(true);
  }

  function handleNewQuote() {
    fetchQuote();
  }

  if (clicked) {
    return (
      <div id="quote-box" className="quote-box">
        <h2>
          <TypeIt>Random Quote Machine...</TypeIt>
        </h2>

        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    );
  } else {
    fetchQuote();
  }
}
