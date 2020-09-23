import React from 'react';
import {Link} from 'react-router-dom';
import './Thumbnail.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <div className="content-overlay" />
          <img style={props.style} className="image" src={props.image} alt="Thumbnail"/>
          <div className="project-title">{props.title}</div>
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail;