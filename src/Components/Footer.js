import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Vector from '.././images/Vector.png'
import styled from "styled-components";
const Footer = () => {
  const data1 = ["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO", "JOIN HYDRA"];
  const data2 = ["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"];
  const icon = [
    <BsFacebook />,
    <BsTwitter />,
    <BsLinkedin />,
    <BsYoutube />,
    <BsInstagram />,
    <BsPinterest />,
  ];

  return <Wrapper>
<img src={Vector} alt="" />
<div>{data1.map((items)=>{
    return <h2>{items}</h2>
})}</div>
<div>{data2.map((items)=>{
    return <h2>{items}</h2>
})}</div>
<div>
    <h2>SOCIALIZE ON HYDRA</h2>
    
    <div className="icons_container">

    {icon.map((items)=>{
        return <div  className="icons">{items}</div>
        
    })}

    </div>
<button className="Top-btn">BUILD YOUR WORLD</button>
</div>
  </Wrapper>;
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  margin: 2rem 0;

  .icons_container {
    display: flex;
  }

  .icons {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    background-color: var(-light--main-color1);
    
  }
`;

export default Footer;
