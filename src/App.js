import './App.css';
import Header from './components/shared/Header';
import RecommendedVideo from './components/shared/RecommendedVideo';
import SideBar from './components/shared/SideBar';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header end */}
      <div className='app__page'>
        {/* Sidebar */}
        <SideBar />
        {/* Sidebar end */}
        {/* Recommended videos */}
        <RecommendedVideo />
        {/* Recommended videos end */}
      </div>

    </div>
  );
}

export default App;
