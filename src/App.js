import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Result = ({ text, count }) => {
  if (count) {
    return (
      <>
        <p>
          {text} {count}
        </p>
      </>
    );
  }

  return <>No feedback given</>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);
  const handleNeutral = () => setNeutral(neutral + 1);

  // const handleAverage = () => {
  //   let defaultGood = 1 * good;
  //   let defaultNeutral = 0 * neutral;
  //   let defaultBad = -1 * bad;

  //   return defaultGood + defaultNeutral + defaultBad;

  //   // console.log(result);
  // };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Result text="good" count={good} />
      <Result text="neutral" count={neutral} />
      <Result text="bad" count={bad} />
      <Result text="all" count={good + bad + neutral} />
      {/* <Result text="average" count={handleAverage} /> */}
    </>
  );
};

export default App;
