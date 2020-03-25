import React from "react";
import Questions from "./Questions";
import Introduction from "./Introduction";
import Conclusion from "./Conclusion";
import { question_tree } from "./contents/question_tree";
import { Card, CardBody } from "reactstrap";
import "./MusicalInstrument.css";
import { render } from "@testing-library/react";

class MusicalInstrument extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_question: question_tree,
      start: true,
      result: null
    };
  }

  handleStart = () => {
    this.setState({ start: false });
  };

  handleRestart = () => {
    this.setState({
      current_question: question_tree,
      start: true,
      result: null
    });
  };

  next = index => {
    const current_question = this.state.current_question;
    const next_question = current_question.options[index].next_question;

    if (next_question) {
      this.setState({
        current_question: next_question
      });
    } else if (current_question.options[index].result) {
      this.setState({
        result: current_question.options[index].result
      });
    }
  };

  render() {
    return (
      <div className="musical-instrument d-flex justify-content-center p-2">
        <Card style={{ width: "50rem" }} className="card-plain">
          <CardBody>
            {this.state.start && <Introduction onStart={this.handleStart} />}
            {!this.state.start && !this.state.result && (
              <Questions
                current_question={this.state.current_question}
                handleClick={this.next}
              />
            )}
            {this.state.result && (
              <Conclusion
                result={this.state.result}
                restart={this.handleRestart}
              />
            )}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MusicalInstrument;
