import React from "react";
import Button from "react-bootstrap/Button";

function Conclusion(props) {
  const { questions, answer, restart } = props;

  const summary = questions.map((question, index) => (
    <div key={index}>
      <h4>질문 #{question.id}</h4>
      <p>{question.question}</p>
      <p>대답 : {question.options[answer[index]]}</p>
    </div>
  ));
  return (
    <div className="text-center">
      <h1 className="p-5">결과</h1>
      <p className="p-5">당신은 ~~~~~ </p>
      {summary}
      <div className="p-5">
        <Button variant="outline-warning" onClick={restart}>
          Restart!
        </Button>
      </div>
    </div>
  );
}

export default Conclusion;
