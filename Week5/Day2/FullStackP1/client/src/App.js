import { useEffect, useState } from "react"
import './App.css';
import Axios from "axios"

function App() {
  const [allMusic, setAllMusic] = useState({})

  useEffect(() => {
    Axios.get("http://localhost:5000/api/music")
      .then(res => {
        // console.log(res.data.allMusic)
        setAllMusic(res.data.allMusic)
        console.log('====================================');
        console.log(res.data.allMusic);
        console.log('====================================');
      })
      .catch(err => {
        console.log(err)
      })
  }, [])




  return (
    <div className="App">
      <h1>Spotify</h1>
      <hr />

      {JSON.stringify(allMusic)}
      <hr />
      {
        allMusic.map((mu, i) => {
          return (
            <div>
              <h2>{mu.singer}</h2>
              <h2>{mu._id}</h2>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
