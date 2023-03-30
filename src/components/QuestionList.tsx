import React from "react";
import { Question } from "../models/models";
import SingleQuestion from "./SingleQuestion";

import "./styles.css";

const questions: Array<Question> = [
  {
    id: 1,
    question:
      "Equity is the quality of being <span id='space'>&nbsp;</span> and impartial",
    options: ["value", "rights", "fair", "worthy"],
    answer: "fair",
  },
//   {
//     id: 2,
//     question: "Finite means <span id='space'>&nbsp;</span> in size or extent",
//     options: ["value", "limited", "fair", "worth"],
//     answer: "limited",
//   },
];

const QuestionList: React.FC = () => {
  return (
    <div className="questions">
      {questions.map((q) => (
        <SingleQuestion
          id={`q${q.id}`}
          question={q.question}
          options={q.options}
          answer={q.answer}
          key={q.id}
        />
      ))}
    </div>
  );
};

export default QuestionList;
