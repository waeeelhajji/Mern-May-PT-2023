
import './App.css';
import Main from './Views/Main';
import { Routes, Route } from "react-router-dom"
import Update from './Views/Update';
import { Details } from './Views/Details';

function App() {
  return (
    <div className="App">
      <fieldset>
        <h1>Book Store</h1>
      </fieldset>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oneBook/:book_id" element={<Details />} />
        <Route path="/update/:book_id" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;
