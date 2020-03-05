import React from "react";
import Questions from "./Questions";
import Introduction from "./Introduction";
import Conclusion from "./Conclusion";
import { question_list } from "./contents/question_list";
import { Card } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import "./MindTest.css";
import { render } from "@testing-library/react";

class MindTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: question_list,
      start: true,
      current: 0,
      answer: []
    };
  }

  handleStart = () => {
    this.setState({ start: false });
  };

  handleRestart = () => {
    this.setState({
      start: true,
      current: 0,
      answer: []
    });
  };

  handleClick = value => {
    let answer = this.state.answer;

    if (answer.length < this.state.questions.length) {
      answer.push(value);
    }

    this.setState({
      answer: answer
    });

    this.next();
  };

  next = () => {
    let current = this.state.current;
    const questions = this.state.questions;
    if (current < questions.length - 1) {
      current++;
    }

    this.setState({
      current: current
    });
  };

  render() {
    let end = false;
    if (this.state.answer.length === this.state.questions.length) {
      end = true;
    }

    return (
      <div className="mindTest d-flex justify-content-center p-2">
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            {this.state.start && <Introduction onStart={this.handleStart} />}
            {!this.state.start && !end && (
              <Questions
                questions={this.state.questions[this.state.current]}
                handleClick={this.handleClick}
              />
            )}
            {end && (
              <Conclusion
                questions={this.state.questions}
                answer={this.state.answer}
                restart={this.handleRestart}
              />
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MindTest;
