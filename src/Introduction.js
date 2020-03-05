import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { introduction } from "./contents/introduction";

function Introduction(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-center">
      <h1 className="p-5">{introduction.title}</h1>
      <p>{introduction.sub_title}</p>
      <p className="p-3">{introduction.description}</p>
      <div className="p-5">
        <Button variant="outline-primary" onClick={props.onStart}>
          시작하기
        </Button>
      </div>
    </div>
  );
}

export default Introduction;
