import './App.css';
import MusicControl from './Components/MusicControl';
import AlbumBar from './Components/AlbumBar';
import NavBar from './Components/NavBar';
import NowPlayingSection from './Components/NowPlayingSection';

function App() {
  return (
    <div className="App flex flex-col justify-stretch">
      <NavBar />
      <div className='relative'>
        <NowPlayingSection/>
        <AlbumBar />
      </div>
      <MusicControl/>
    </div>
  );
}

export default App;
