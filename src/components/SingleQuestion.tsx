import React from "react";
import { stripHtml } from "../utils";

import "./styles.css";

const SingleQuestion: React.FC<{
  id: string;
  question: string;
  options: Array<String>;
  answer: string;
}> = ({ id, question, options, answer }) => {
  const onDragOver = (e: React.DragEvent<EventTarget>) => {
    e.preventDefault();
  };
  const onDragStart = (e: React.DragEvent<EventTarget>, id: number) => {
    console.log("dragstart", id, e);
    e.dataTransfer.setData("text", `option-${id}`);
  };
  const onDrop = (e: React.DragEvent<EventTarget>) => {
    console.log("drop", e);
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const fillValue = document.getElementById(data)?.innerText!;
    // (e.target as HTMLElement).appendChild(document.getElementById(data)!);
    // (e.target as HTMLElement).appendChild(fillValue);
    document.getElementById('space')!.append(fillValue)
  };
  return (
    <>
      {/* <div className="question">
        <p className="question-text">
          Equity is the quality of being <span>&nbsp;</span> and impartial
        </p>
        <ul className="options">
          <li>value</li>
          <li>rights</li>
          <li>fair</li>
          <li>worthy</li>
        </ul>
      </div> */}
      <div className="question" key={id}>
        {/* <p className="question-text">{question}</p> */}
        <p
          className="question-text"
          dangerouslySetInnerHTML={{ __html: question }}
          id={id}
          onDrop={(e) => onDrop(e)}
          onDragOver={(e) => onDragOver(e)}
        />
        <pre
          className="question-text"
          id={id}
          onDrop={(e) => onDrop(e)}
          onDragOver={(e) => onDragOver(e)}
        >
          {stripHtml(question)}
        </pre>
        <ul className="options">
          {options.map((option, i) => (
            <li
              id={`option-${i}`}
              key={i}
              onDragStart={(e) => onDragStart(e, i)}
              draggable
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SingleQuestion;
