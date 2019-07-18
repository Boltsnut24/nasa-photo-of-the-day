import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  font-size: 2em;
  background-color: gray;
`;

const Header = styled.h2`
   color: purple;
   height: 80px;
   background-color: lightgrey;
   margin-top: 0px;
`;

const Image = styled.img`
  border-radius: 100%;
  display: block;
`;

const bodyText = styled.p`
  width: 800px;
  background-color: lightgrey;
  margin: auto;
`;

function PhotoCard(prop) {
  console.log(prop)
  return (
    <CardStyle>
      <Header>{prop.title}</Header>
      <Image src={prop.url} alt="Photo of the day"></Image>
      <img src = "src\telescope.png" alt ="Telescope"></img>
      <bodyText>{prop.explanation}</bodyText>
      <p>{prop.date}</p>
    </CardStyle>
  )
}



export default PhotoCard;