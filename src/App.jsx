import { Component } from 'react'
import './App.css'

import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleCount = (type) => {
    this.setState((prev) => ({
      [type]: prev[type] + 1
    })
    )
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (
      good + neutral + bad
    )
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (
      Math.round((100 * good) / this.countTotalFeedback())
    )
  }

  render() {
    const { good, neutral, bad } = this.state;
    const option = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.handleCount}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App
