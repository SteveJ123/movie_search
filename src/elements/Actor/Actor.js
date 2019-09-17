import React from 'react';
import { IMAGE_BASE_URL } from '../../config';
import './Actor.css';

const Actor = (props) => {

  const POSTER_SIZE = "w154";
//   display: "inline", , height: "80px". width: "40px", style={{ float: "left" }}
  return (
    <div >
      <img
        src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_image.jpg'}
        alt="actorthumb"
        style={{width: "154px", height: "231px"}}
      />
      <span className="rmdb-actor-name">{props.actor.name}</span>
      <span className="rmdb-actor-character">{props.actor.character}</span>
     </div>
  )
}

export default Actor;