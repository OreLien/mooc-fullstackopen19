import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({text}) => <h1>{text}</h1>;

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
    if(good === 0 && neutral === 0 && bad === 0) {
        return <div>No feedback yet</div>
    }

    return (
    <>
        <table>
            <tbody>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={good + neutral + bad} />
                <Statistic text="average" value={(good - bad) / (good + neutral + bad)} />
                <Statistic text="positive" value={(good) * 100 / (good + neutral + bad) + " %"} />
            </tbody>
        </table>
    </>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
      <div>
        <DisplayTitle text="Give feedback" />
        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
        <DisplayTitle text="Statistics :" />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
  }

  ReactDOM.render(<App />,
    document.getElementById('root')
  )