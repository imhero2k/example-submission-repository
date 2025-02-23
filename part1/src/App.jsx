import { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // Finding the anecdote with the most votes
  const maxVotes = Math.max(...votes)
  const bestAnecdoteIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      {maxVotes > 0 && (
        <div>
          <h2>Most Voted Anecdote</h2>
          <p>{anecdotes[bestAnecdoteIndex]}</p>
          <p>Votes: {maxVotes}</p>
        </div>
      )}
    </div>
  )
}

export default App
