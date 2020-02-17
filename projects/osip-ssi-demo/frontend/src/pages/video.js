import React from 'react';
import '../styles/materialize.css';
import '../styles/main.scss';
import Navigation from '../components/navigation.js'

function Video() {
  return (
    <div>
      <Navigation text="OSiP SSI Demo Video"/>

      <div className="bg green">
        <div className="mainArea grid video">
          <video width="400" controls autoPlay>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
