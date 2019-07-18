import React from 'react';

function PhotoCard(prop) {
  console.log(prop)
  return (
    <div>
      <h2>{prop.title}</h2>
      <img src={prop.url} alt="Photo of the day"></img>
      <p>{prop.explanation}</p>
      <p>{prop.date}</p>
    </div>
  )

}

export default PhotoCard;