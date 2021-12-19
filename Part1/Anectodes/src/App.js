import React, { useState } from 'react'


const Button =({handleClick, text}) =>(  
    <button onClick={handleClick}> 
    {text}
    </button>    
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0) 
  const[votes, setVote] = useState(Array(6).fill(0))  

  const handleAnecdoteClick = () => {
     const random =  Math.floor(Math.random() * anecdotes.length)
     setSelected(random)
  }

  const handleVote = () => {
   const voteCopy = [...votes]
   voteCopy[selected] +=1
   setVote(voteCopy)
  }  
 
  const max = Math.max(...votes)
  const mostVoted = votes.indexOf(max)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button  text='vote' handleClick= {handleVote}/>
      <Button  text='next anecdote' handleClick= {handleAnecdoteClick}/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p> 
      <p>has {max} votes</p>
    </div> 
  )
}

export default App




