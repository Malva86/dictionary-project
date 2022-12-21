import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetisc);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        📢
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
