
//Styles
import './style/output.css'

//Custom Hooks
import useFetch from './components/useFetch'
//Components
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import { useState } from 'react'

function App() {

  //Fetch data
  const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
  const userData = useFetch(url)


  //Save functionality
  const [savedPosts, setSavedPosts] = useState([])

  const handleSave = (savedPost) => {
    if (!savedPosts.includes(savedPost)) {
      setSavedPosts([...savedPosts, savedPost])
      console.log('post saved' + savedPost)
    } else {
      setSavedPosts(savedPosts.filter((post) => post !== savedPost))
      console.log('post removed from saved' + savedPost)
    }
  }

  //Like functionality
  const [likedPosts, setLikedPosts] = useState([])
  const [showHeart, setShowHeart] = useState(false)

  const handleLike = (likedPost) => {
    if (!likedPosts.includes(likedPost)) {
      setLikedPosts([...likedPosts, likedPost])
      console.log('post liked')
      setShowHeart(true)
      setTimeout(() => {
        setShowHeart(false)
      }, 1000)
    } else {
      setLikedPosts(likedPosts.filter((post) => post !== likedPost))
      console.log('removed')
    }
  }

  return (
    <div className="App">
      <Navbar mt-6 />
      {userData.loaded ? <Feed handleSave={handleSave} showHeart={showHeart} likedPosts={likedPosts} savedPosts={savedPosts} handleLike={handleLike} users={userData.data} /> : <p>Loading</p>}

    </div>
  );
}

export default App;
