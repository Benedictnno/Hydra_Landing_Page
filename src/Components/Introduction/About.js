import React,{useEffect} from 'react'
import Mask_group from "../../images/Mask_group.png";
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 
  return (
    <section className="About responsive_intro">
      <img
        src={Mask_group}
        className="image_size abt-image"
        alt=""
        data-aos="fade-right"
        data-aos-duration="2000"
      />
      <div data-aos="fade-left" data-aos-duration="2000">
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
    </section>
  );
}

const Wrapper = styled.section`
 

  
  button {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    .responsive_Top {
      display: flex;
      flex-direction: column-reverse;
    }

    // .responsive_info {
    //   display: flex;
    //   flex-direction: column;
    // }

    // .responsive_intro {
    //   display: flex;
    //   flex-direction: column;
    //   flex-wrap: nowrap;
    //   flex-grow: 0;
    //   flex-basis: content;
    // }
  }
`;

export default About
