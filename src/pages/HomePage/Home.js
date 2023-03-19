import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../../components/VideoList/VideoList';
import Hero from '../../components/Hero/Hero';
import MainVideo from '../../components/MainVideo/MainVideo';
import axios from 'axios';

const API_URL = "http://localhost:7070";

const Home = () => {
  const [videos, setVideos] = useState([]); 
  const [activeVideo, setActiveVideo] = useState(null);

  const { id } = useParams();

  
  useEffect(() => {
    axios.get(API_URL + '/videos') 
      .then(res => setVideos(res.data)) 
      .catch(error => console.log(error));
  }, []);


  useEffect(() => { 
    if(videos.length > 0){
      axios.get(API_URL + '/videos/' + (id ? id : videos[0].id)) 
        .then(res => setActiveVideo(res.data))
        .catch(error => console.log(error));
    }
  }, [videos, id]); 
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
