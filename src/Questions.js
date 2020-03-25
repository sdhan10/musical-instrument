import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

function Questions(props) {
  const { current_question, handleClick } = props;

  return (
    <div className="text-center">
      <h4 className="pb-5">{current_question.question}</h4>
      <Container className="options">
        <Row>
          {current_question.options.map((option, index) => (
            <Col md>
              <Card
                key={option.answer}
                value={index}
                onClick={() => handleClick(index)}
              >
                <div className="card-image-top">
                  <img
                    alt="..."
                    className="img img-raised"
                    src={option.image}
                  />
                </div>
                <CardBody>
                  <CardTitle className="text-center">{option.answer}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Questions;
