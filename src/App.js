import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(`useEffect`);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA-GeAio_uars1qVGYqNusRdorj8y4CCYw&chart=mostPopular&maxResults=25&part=snippet&regionCode=kr", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setVideos(result.items)
      })
      .catch(error => console.log('error', error));


  }, []);

  return <VideoList videos={videos}/> ;
}

export default App;
