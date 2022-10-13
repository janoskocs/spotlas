
//Styles
import './style/main.css'
//Custom Hooks
import useFetch from './components/useFetch'
//Components
import Navbar from './components/Navbar'
import Feed from './components/Feed'

function App() {

  const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
  const userData = useFetch(url)

  return (
    <div className="App">
      <Navbar />
      <Feed users={userData} />
    </div>
  );
}

export default App;
