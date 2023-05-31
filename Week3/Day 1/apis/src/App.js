import Axios from "axios"
import './App.css';
import { useEffect, useState } from 'react';
import GitHubApi from "./components/GitHubApi";

function App() {


  // anything dynamic needs STATE
  const [heroes, setHeroes] = useState([])
  //!-------------------------UseEffect
  console.log("1.before useEffect")
  useEffect(() => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      }).catch(err => {
        console.log(err)
      })

  }, [])
  console.log("3.after useEffect")


  //!-------------------------Axios
  const AxiosHeroes = () => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      }).catch(err => {
        console.log(err)
      })
  }


  //!-------------------------fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        return response.json()
      }).then(response => {
        console.log(response)
        setHeroes(response)
      })
      .catch(err => {
        console.log(err);
      })

  }




  return (
    <div className="App">
      {/* <h1> 🦸 🦹  SupperHeroes 🦸‍♀️ 🦹‍♀️ </h1>
      <h4>fetch /Axios / useEffect</h4>
      <hr />
      {JSON.stringify(heroes)}
      <button onClick={fetchHeroes}> fetch SupperHeroes</button>
      <button onClick={AxiosHeroes}> Axios SupperHeroes</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>
              Hero Name
            </th>
            <th>
              Full Name
            </th>
            <th>
              Publisher
            </th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map(hero => {
              return (
                <tr key={hero.id}>
                  <td>
                    <img src={hero.images.sm}
                      width="70px"
                    />

                  </td>
                  <td>
                    {hero.name}
                  </td>
                  <td>
                    {hero.biography.fullName ? hero.biography.fullName : "No Data"}
                  </td>
                  <td>
                    {hero.biography.publisher}
                  </td>
                </tr>

              )
            })
          }
        </tbody>

      </table> */}
      <GitHubApi />
    </div>
  );
}

export default App;
