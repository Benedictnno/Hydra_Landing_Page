import React,{useEffect} from "react";
import Simulation from "../images/Simulation.png";
import education from "../images/education.png";
import self_care from "../images/self_care.png";
import outdoor from "../images/outdoor.png";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const data = [
    {
      image: Simulation,
      header: "SIMULATION",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
      btn: 'Try It Now'
    },
    {
      image: education,
      header: "EDUCATION",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
      btn: 'Try It Now'
    },
    {
      image: self_care,
      header: "SELF-CARE",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
      btn: 'Try It Now'
    },
    {
      image: outdoor,
      header: "OUTDOOR",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae",
      btn: 'Try It Now'
    },
  ];
  return <Wrapper>
      {data.map(({image,header,text,btn},index)=>{
        return (
          <div key={index} data-aos="flip-left" data-aos-duration="2000">
            <img src={image} alt="" className={""} />
            <h2>{header}</h2>
            <p>{text}</p>
            <button className="Top-btn">{btn}</button>
          </div>
        );
      })}
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  margin: 5.5rem 0;
  justify-content: center;
  color: #fff;

  div {
    background: radial-gradient(
      circle,
      rgba(67, 61, 96, 1) 32%,
      rgba(33, 30, 46, 1) 83%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    border-radius: 20px;
    margin: 0 1rem;
  }

  img {
    width: 200px;
    display: block;
    margin: 1em auto;
    border: 10px solid #0e0e0e;
    border-radius: 50%;
  }

  h2 {
    font-family: var(--fontFamily);
    font-weight: 900;
    border-bottom: 2px solid var(--light-main-color1);
    padding : .5em;
    margin : .5em;
  }

  button {
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    margin: 1rem;
    font-size: 1.2rem;
    background: linear-gradient(90deg, #8176af #c0b7e8);
  }
`;
export default Cards;
