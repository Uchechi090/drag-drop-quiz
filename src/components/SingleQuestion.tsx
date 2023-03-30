import React from "react";

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
    document.getElementById('space')!.append(fillValue)
  };
  return (
    <>
      <div className="question" key={id}>
        <p
          className="question-text"
          dangerouslySetInnerHTML={{ __html: question }}
          id={id}
          onDrop={(e) => onDrop(e)}
          onDragOver={(e) => onDragOver(e)}
        />
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
