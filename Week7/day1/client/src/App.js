
import './App.css';
import Main from './Views/Main';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/update" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;
