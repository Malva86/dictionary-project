import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        📢
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
