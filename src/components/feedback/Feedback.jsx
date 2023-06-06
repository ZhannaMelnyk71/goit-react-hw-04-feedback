
import { useState } from "react";
// import PropTypes from 'prop-types'
import { Section } from "components/Section/Section";
import { Statistics } from 'components/Statistics/Statistics'
import { Options } from 'components/FeedbackOptions/Options'


export const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];


  const handleChange = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / (good + neutral + bad));
  }

  return (
      <div>
        <Section title="Please leave your feedback">
          <Options options={options} onLeaveFeedback={handleChange} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    );
}

