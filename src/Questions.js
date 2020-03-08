import React from "react";
import { Button } from "reactstrap";

function Questions(props) {
  const { current_question, handleClick } = props;

  return (
    <div className="text-center">
      <h4>{current_question.question}</h4>
      <div className="options">
        {current_question.options.map((option, index) => (
          <div>
            <Button
              className="mt-4"
              outline
              color="info"
              key={option.answer}
              value={index}
              onClick={e => handleClick(e.target.value)}
            >
              <i className="nc-icon nc-check-2"></i>
              {option.answer}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
