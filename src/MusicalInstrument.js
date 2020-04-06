import React, { useState } from "react";
import Questions from "./Questions";
import Introduction from "./Introduction";
import Conclusion from "./Conclusion";
import { question_tree } from "./contents/question_tree";
import { Card, CardBody } from "reactstrap";
import "./MusicalInstrument.css";

const MusicalInstrument = () => {
  const [current_question, setQuestion] = useState(question_tree);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStart(false);
  };

  const handleRestart = () => {
    setQuestion(question_tree);
    setStart(true);
    setResult(null);
  };

  const next = index => {
    const next_question = current_question.options[index].next_question;

    if (next_question) {
      setQuestion(next_question);
    } else if (current_question.options[index].result) {
      setResult(current_question.options[index].result);
    }
  };

  return (
    <div className="musical-instrument d-flex justify-content-center p-2">
      <Card style={{ width: "50rem" }} className="card-plain">
        <CardBody>
          {start && <Introduction onStart={handleStart} />}
          {!start && !result && (
            <Questions current_question={current_question} handleClick={next} />
          )}
          {result && <Conclusion result={result} restart={handleRestart} />}
        </CardBody>
      </Card>
    </div>
  );
};

export default MusicalInstrument;
