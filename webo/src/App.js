import './App.css';
import videosObject from './data/videosObject';
import Video from './components/Video';
function App() {
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>VIDEOS</h1>
      {videosObject.map(vobj=><Video
        key={vobj.id}
        id={vobj.id}
        title = {vobj.title}
        channel = {vobj.channel}
        views = {vobj.views}
        time = {vobj.time}
        verified = {vobj.verified}
      />)}
    </div>
  );
}

export default App;
