import { Component } from "react";

import { Percentage } from "./Statistics.style";
import { Summary } from "./Statistics.style";

class Statistics extends Component {
  render() {
    const {good, neutral, bad, total, positivePercentage} = this.props

    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <Summary>Total: {total}</Summary>
        <Percentage num={positivePercentage}>Positive Feedback: {positivePercentage ? positivePercentage : 0}%</Percentage>
      </div>
    );
  }
}

export default Statistics