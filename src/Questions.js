import React from "react";
import { Button } from "react-bootstrap";

function Questions(props) {
  const { questions, handleClick } = props;

  return (
    <div className="text-center">
      <h2 className="p-5">질문 #{questions.id}</h2>
      <p>{questions.question}</p>
      <div className="options">
        {questions.options.map((option, index) => (
          <div>
            <Button
              className="mt-4"
              variant="outline-info"
              key={option}
              value={index}
              onClick={e => handleClick(e.target.value)}
            >
              {option}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
