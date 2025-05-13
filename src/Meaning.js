import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <div className="definition">{props.meaning.definition}</div>

        <div className="example">{props.meaning.example}</div>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
