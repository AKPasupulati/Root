import React from 'react'

function App() {
   const handleSubmit= (e) =>{
    console.log(e);
   }

  return (
    <div>
      <h1>Event Handler</h1>
      <button onClick={handleSubmit}>Submit</button>
      
    <p></p>
    </div>
  )
}

export default App

