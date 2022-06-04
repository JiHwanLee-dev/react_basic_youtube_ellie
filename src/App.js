import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    console.log(videos);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA-GeAio_uars1qVGYqNusRdorj8y4CCYw&part=snippet&type=video&maxResults=25&q=${query} `, requestOptions)
      .then(response => response.json())
      .then(result => (
        result.items.map(item => 
          ({...item, id: item.id.videoId}))
        // setVideos(aa)
      ))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    console.log(`useEffect`);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA-GeAio_uars1qVGYqNusRdorj8y4CCYw&chart=mostPopular&maxResults=25&part=snippet&regionCode=kr", requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items)
      })
      .catch(error => console.log('error', error));


  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/> ;
    </div>
  )
}

export default App;
