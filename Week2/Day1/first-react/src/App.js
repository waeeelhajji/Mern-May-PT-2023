
import './App.css';
import FunctionCom from './components/FunctionCom';

function App() {
  const Persone = {
    name: "bob",
    age: 56
  }

  return (

    <fieldset>
      <legend>APP.js</legend>
      <div className="App">
        <FunctionCom number={17} obj={Persone} />
      </div>
    </fieldset>
  )

}

export default App;
