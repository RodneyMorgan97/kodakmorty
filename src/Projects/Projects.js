import React from 'react';
import Thumbnail from './Thumbnail.js';
import './Projects.css'

import OriginalArtworkThumbnail from '../gallery/Original Artwork Gallery/CVNP Bridge.png'
import LandscapeThumbnail from '../gallery/Landscape Gallery/Akron U.jpg'
import MonochromeThumbnail from '../gallery/Monochrome Gallery/Air.jpg'
import PortraitThumbnail from '../gallery/Portrait Gallery/Highland Squre Gavin.jpg'

function Projects() {
  return (
    <div className="grid-container">
      <div className="item1">
        <Thumbnail
          link="/OriginalArtwork"
          image={OriginalArtworkThumbnail}
          title="Original Artwork"
          style={window.innerWidth < 700 ? {width: "80vw"} :{width: "36vw"}}
        />
      </div>
      
      <div className="item2">
        <Thumbnail
          link="/Landscape"
          image={LandscapeThumbnail}
          title="Landscape"
          style={window.innerWidth < 700 ? {width: "80vw"} :{width: "25vw"}}
        />
      </div>
      
      <div className="item3">
        <Thumbnail
          link="/Monochrome"
          image={MonochromeThumbnail}
          title="Monochrome"
          style={window.innerWidth < 700 ? {width: "80vw"} : {width: "25vw"}}
        />
      </div>
      
      <div className="item4">
        <Thumbnail
          link="/Portrait"
          image={PortraitThumbnail}
          title="Portrait"
          style={window.innerWidth < 700 ? {width: "80vw"} :{width: "25vw"}}
        />
      </div>
    </div>
  );
}

export default Projects;
