import React from "react"
import styled from 'styled-components'

const ButtonRight = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  position: fixed;
  top: 50%;
  right: 5%;
`

function RightButton(){
  return (
    <ButtonRight>Next</ButtonRight>
  )
}

export default RightButton;