import { useState } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const onLeaveFeedback = (propertyName) => {
    setState((prevState) => {
      const value = prevState[propertyName];
      console.log(prevState[propertyName])
      return {
        ...prevState,
        [propertyName]: value + 1
      }
    })
  }

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = (name) => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = state[name];
    const resault = (value / total) * 100;
    return Number(resault.toFixed(2));
  }

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercent = countPositiveFeedbackPercentage("good");


  return (
    <div className="App">
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title='Statistics'>
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePercent} />
          : <Notification message='There is no feedback' />
        }

      </Section>
    </div>
  )
}
