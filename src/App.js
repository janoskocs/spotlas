import './style/main.css'

import { useState, useEffect } from 'react'

//Custom Hooks
import useFetch from './components/useFetch';

function App() {

  const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
  const userData = useFetch(url)

  console.log(userData)
  return (
    <div className="App">

      {userData.map((user) => (
        <h1 key={user.id}>{user.caption.text}</h1>
      ))}

    </div>
  );
}

export default App;
