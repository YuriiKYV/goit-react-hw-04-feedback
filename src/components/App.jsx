import React, { Component } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification  from "./Notification/Notification";

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  onLeaveFeedback = (propertyName) => {
    this.setState((prevState) => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1
      }
    })
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (name) => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[name];
    const resault = (value / total) * 100;
    return Number(resault.toFixed(2));
  }

  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage("good");

    return (
      <div className="App">
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          { total ?
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercent={positivePercent} />
            : <Notification message='There is no feedback'/>
        }
          
        </Section>
    </div>
  );
  }
}
