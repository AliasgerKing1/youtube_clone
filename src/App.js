import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchedPage from './components/pages/SearchedPage/SearchedPage';
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:searchTerm' element={<SearchedPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
