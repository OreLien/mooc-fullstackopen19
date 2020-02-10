import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DisplayTitle = ({text}) => <h1>{text}</h1>;

const DisplayAnecdote = ({anecdote, votes}) => (
    <>
        <p>{anecdote}</p>
        <p>Votes : {votes}</p>
    </>
)

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const App = (props) => {
    const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }

    return (
      <div>
        <DisplayTitle text="Anecdote of the day" />
        <DisplayAnecdote anecdote={props.anecdotes[selected]} votes={points[selected]} />
        <Button text="+1" onClick={handleVote} />
        <Button text="Next anecdote" onClick={() => { setSelected(Math.floor(Math.random() * anecdotes.length))}} />
        <DisplayTitle text="Best anecdote of all time" />
        <DisplayAnecdote anecdote={props.anecdotes[points.indexOf(Math.max(...points))]} votes={points[points.indexOf(Math.max(...points))]} />
      </div>
    )
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )