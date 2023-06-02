
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Hero from './components/Hero';
import Error from './components/Error';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <img src="https://pbs.twimg.com/media/Ei8rGfjX0AAWtAA.jpg" height="200" /> <br />

      {/* no <a>BIG NO</a> */}
      {/* <a href="/home">Home</a> */}
      {/* <Link to={"/"}>Home</Link> */}
      <Link to={"/home"}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/"}>/</Link><br />
      <Form />
      <hr />
      <Routes>
        <Route path="/home" element={
          <>
            <Home />
          </>
        }

        />
        <Route path="/hero/:urlVar" element={<Hero />} />
        <Route path="/error" element={<Error />} />

      </Routes>


    </div>
  );
}

export default App;
