import React, { useState, useEffect } from 'react';
import './Landscape.css';
import 'isomorphic-fetch'; // or another library of choice.

var Dropbox = require('dropbox').Dropbox;

function Landscape() {

  const [photoList, setPhotoList ] = useState([]);

  useEffect(() => makeRequest(),[]);

  function makeRequest() {
    var dbx = new Dropbox({ accessToken: process.env.REACT_APP_DROPBOX_API_KEY});
    dbx.filesListFolder({path: '/Photo/Website/Landscape Gallery'})
      .then(function(response) {
        console.log(response.entries);
        setPhotoList(response.entries);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  
  
  
  return (
    <div>

        <p>Landscape</p>
        <p>{photoList.toString()}</p>
    </div>
    
  );
}

export default Landscape;
