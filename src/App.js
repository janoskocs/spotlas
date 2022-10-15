
//Styles
import './style/output.css'

//Custom Hooks
import useFetch from './components/useFetch'
//Components
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import { useState } from 'react'

function App() {

  const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
  const userData = useFetch(url)

  const [likedPosts, setLikedPosts] = useState([])

  const handleLike = (likedPost) => {
    if (!likedPosts.includes(likedPost)) {
      setLikedPosts([...likedPosts, likedPost])
      console.log('post liked')
    } else {
      setLikedPosts(likedPosts.filter((post) => post !== likedPost))
      console.log('removed')
    }
  }

  return (
    <div className="App">
      <Navbar />
      {userData.loaded ? <Feed likedPosts={likedPosts} handleLike={handleLike} users={userData.data} /> : <p>Loading</p>}

    </div>
  );
}

export default App;
