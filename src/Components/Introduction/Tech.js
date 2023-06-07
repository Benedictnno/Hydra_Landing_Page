import React from 'react'
import vr from '../../images/vr.png'
import styled from 'styled-components'
import chevron from '../../images/chevron.png'

const Tech = () => {
  return (

       <Wrapper img={vr}>
          

        <h1>TECHNOLOGIES & HARDWARE</h1>
        <h2>USED BY HYDRA VR.</h2>
        <img src={chevron} alt="" />

        
          
     </Wrapper>

       
    
  );
}

const Wrapper = styled.section`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  border-radius: 100px;
  height: 200px;
  text-align: center;
  display: grid;
  margin: 3rem auto;
  color: #fff;
  place-content: center;

  img {
    display: block;
    margin: 0.3rem auto;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.2rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: none;
  }
`;

export default Tech
