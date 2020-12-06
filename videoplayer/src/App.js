import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Title from './Components/Title'


function App() {
  const [videoFilePath, setVideoFileURL] = useState(null);
  const [width,setWidth]=useState(640);
  const[hight,setHight]=useState(360)
  
  const handleVideoUpload = (e) => {
    setVideoFileURL(URL.createObjectURL(e.target.files[0]));
  };
  const oneToOneAspect=()=>{
    setWidth(400);
    setHight(400);
  }
  const sixteenToNineAspect=()=>{
    setWidth(640);
    setHight(360);
  }

  return (
    <div className="App">
      <h1>Video Player</h1>
      <div className='video-picker custom-file'>
        <input type="file" onChange={handleVideoUpload} className='custom-file-input' id="customFile" />
        <label className="custom-file-label" for="customFile">Choose Video</label>
      </div>

      <div className='title'>
        <Title />
      </div>
      <div className='video'>
        <ReactPlayer url={videoFilePath} controls={true} width={width} height={hight} type='video/mp4' />
        <button className='btn btn-primary btn-o' onClick={oneToOneAspect}>1:1</button>
        <button className='btn btn-primary btn-t' onClick={sixteenToNineAspect}>16:9</button>
      </div>
      
    </div>
  );
}

export default App;
