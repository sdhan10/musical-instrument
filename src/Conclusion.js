import React from "react";
import { Button } from "reactstrap";

function Conclusion(props) {
  const { result, restart } = props;

  return (
    <div className="text-center">
      <img style={{ height: "20rem" }} src={result.image} alt=""></img>
      <h2 className="p-3">{result.title}</h2>
      <p className="p-2">{result.text}</p>
      <div className="p-5">
        <Button className="btn-round" color="warning" onClick={restart}>
          다시 검사하기
        </Button>
      </div>
    </div>
  );
}

export default Conclusion;
