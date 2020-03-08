import React, { useState } from "react";
import { Button } from "reactstrap";
import { introduction } from "./contents/introduction";

function Introduction(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-center">
      <h1 className="p-5">{introduction.title}</h1>
      <p>{introduction.sub_title}</p>
      <p className="p-3">{introduction.description}</p>
      <div className="p-5">
        <Button className="btn-round" color="primary" onClick={props.onStart}>
          시작하기
        </Button>
      </div>
    </div>
  );
}

export default Introduction;
