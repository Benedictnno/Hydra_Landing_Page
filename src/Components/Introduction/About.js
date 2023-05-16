import React from 'react'
import Mask_group from "../../images/Mask_group.png";
import styled from 'styled-components';
const About = () => {
  return (
    <Wrapper>
      <img src={Mask_group} alt="" />
      <div>
        <h1>ABOUT</h1>
        <h1>HYDRA VR</h1>
        <br />

        <p>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </p>
        <button className="Top-btn spacing">Let's Get In Touch</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 6fr 6fr);
  place-items: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin: 2rem 0;
  font-size: 1.2rem;

  h1 {
    font-size: 2rem;
  }
  button {
    margin-top: 1rem;
  }
`;

export default About
