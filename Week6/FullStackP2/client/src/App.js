import { useEffect, useState } from "react"
import './App.css';
import Axios from "axios"

function App() {
  const [allMusic, setAllMusic] = useState([])

  const [singer, setSinger] = useState("")
  const [music, setMusic] = useState("")
  const [views, setViews] = useState(0)

  useEffect(() => {
    Axios.get("http://localhost:5000/api/music")
      .then(res => {
        // console.log(res.data.allMusic)
        setAllMusic(res.data)
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const SubmitForm = (e) => {
    e.preventDefault()
    const newMusic = {
      singer,
      music,
      views
    }

    Axios.post("http://localhost:5000/api/m", newMusic)
      .then(res => {
        console.log("Your music is submitted successfully 😻😻😻😻😻")
      })
      .catch(err => {
        console.log(err)
      })
  }




  return (
    <div className="App">
      <h1>Spotify</h1>
      <hr />
      Singer Name : {JSON.stringify(singer)}
      Music : {JSON.stringify(music)}
      Views : {JSON.stringify(views)}



      <form onSubmit={SubmitForm}>
        Name of the Singer :
        <input onChange={(e) => {
          setSinger(e.target.value)
        }} value={singer} /> <br />
        Name of the Music :
        <input onChange={(e) => { setMusic(e.target.value) }} value={music} /> <br />
        How many views :
        <input onChange={(e) => { setViews(e.target.value) }} value={views} type="number" /> <br />

        <input type="submit" value="Create" />

      </form>



      <hr />
      {/* {JSON.stringify(allMusic)} */}
      <hr />
      {
        allMusic.map((mu, i) => {
          return (
            <div>
              <h2>{mu.singer}</h2>
              <h2>{mu.music}</h2>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
