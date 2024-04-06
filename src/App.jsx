
import './App.css';
import Songcompoenent from './components/Songcompoenent';
import claps from './assets/claps.mp3'
import boo from './assets/boo.mp3'
import gasp from './assets/gasp.mp3'
import tada from './assets/tada.mp3'
import victory from './assets/victory.mp3'
import wrong from './assets/wrong.mp3'

function App() {
  const song = (snd) => {
    snd.play()
}
  return (
    <div className="principal-container">
      <div className='container'>
        <Songcompoenent title='applause' audio={claps} song= {song}/>
        <Songcompoenent title='boo' audio={boo} song= {song}/>
        <Songcompoenent title='gasp' agaspudio={gasp} song= {song}/>
        <Songcompoenent title='tada' audio={tada} song= {song}/>
        <Songcompoenent title='victory' audio={victory} song= {song}/>
        <Songcompoenent title='wrong' audio={wrong} song= {song}/>
        
      </div>

    </div>
  );
}

export default App;
