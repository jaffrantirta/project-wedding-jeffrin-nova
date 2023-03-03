import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Greeting, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/invitation" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
