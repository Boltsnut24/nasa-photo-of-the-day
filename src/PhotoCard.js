import React from 'react';
import styled from 'styled-components';
import imgT from './telescope.png';
const CardStyle = styled.div`
  font-size: 2em;
  background-color: lightgrey;
  width: 75%;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  margin-bottom: 0px;
`
const Date=styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: .75em;
`

const Image = styled.img`
  width: 80%;
  display: flex;
  margin: auto;
  margin-bottom: 10px;
`;

const BodyText = styled.p`
  width: 80%;
  background-color: lightgrey;
  margin: auto;
  text-align: left;
`;

function PhotoCard(prop) {
  console.log(prop)
  return (
    <CardStyle>
  
      <Title>{prop.title}</Title>
      <Date>{prop.date}</Date>
      <Image src={prop.url} alt="Photo of the day"></Image>
      <BodyText>{prop.explanation}</BodyText>
      
    </CardStyle>
  )
}



export default PhotoCard;