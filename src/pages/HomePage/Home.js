import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../../components/VideoList/VideoList';
import Hero from '../../components/Hero/Hero';
import MainVideo from '../../components/MainVideo/MainVideo';
import axios from 'axios';

const API_URL = "http://localhost:7070";

const Home = () => {
  // [state, setState] = usState(initial value) reminder charity case 
  const [videos, setVideos] = useState([]); 
  const [activeVideo, setActiveVideo] = useState(null);

  const { id } = useParams(); // id is set when there is an id param in the url

  // runs after first render
  useEffect(() => {
    axios.get(API_URL + '/videos') // get all videos
      .then(res => setVideos(res.data)) 
      .catch(error => console.log(error));
  }, []);

  // runs after get videos/ and after first render
  useEffect(() => { 
    // prevent using video[0] (default) only use it if no id in the url
    if(videos.length > 0){
      // condition ? result if condition is true : result if condition is false (ternary operator)
      axios.get(API_URL + '/videos/' + (id ? id : videos[0].id)) // get video by id
        .then(res => setActiveVideo(res.data))
        .catch(error => console.log(error));
    }
  }, [videos, id]); // videos goes from [] -> [vid1, vid2 ... ] when this happens need to fetch inital active video

  if(activeVideo === null || videos === []) {
    return <h1>Loading...</h1>
  }

  return(
    <>
      <Hero videoObj={activeVideo} />
      <div className="desktop">
        {
          <>
            <MainVideo details={activeVideo}  className="desktop__main-video" />
            <VideoList details={activeVideo} videoList={videos} className="desktop__main-list" />
          </>
        }
      </div>
    </>
  );
}


export default Home;
