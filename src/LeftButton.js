import React from "react"
import styled from 'styled-components'

const ButtonLeft = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  position: fixed;
  top: 50%;
  left: 5%;
`

function LeftButton(){
  return (
    <ButtonLeft>Prev</ButtonLeft>
  )
}

export default LeftButton;