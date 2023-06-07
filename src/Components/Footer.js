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
<div className="data1">{data1.map((items)=>{
    return <h2 className="datatext" key={items}>{items}</h2>
})}</div>
<div className="data2">{data2.map((items)=>{
    return <h2 className="datatext" key={items}>{items}</h2>;
})}</div>
<div>
    <h2>SOCIALIZE ON HYDRA</h2>
    
    <div className="icons_container">

    {icon.map((items,index)=>{
        return <div  className="icons" key={index}>{items}</div>
        
    })}

    </div>
<button className="Top-btn">BUILD YOUR WORLD</button>
</div>
  </Wrapper>;
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  margin: 3rem 0;

  .icons_container {
    display: flex;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: 900;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    // background: linear-gradient(90deg, #8176af, #c0b7e8);
    border: 10px solid #c0b7e8;
    margin: 0.5rem;
  }

  .data1 {
    border-left: 2.5px solid #c0b7e8;
    border-right: 2.5px solid #c0b7e8;
    display: block;
    margin: 0 auto;
    padding: 0 4rem;
  }
  .data2 {
    border-right: 2.5px solid #c0b7e8;
    display: block;
    margin: auto;
    padding: 0 3rem 0 0;
  }

  .datatext {
    margin-bottom: 1rem;
  }

  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 4fr);
    margin: 3rem 0;

    .icons_container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .data1 {
      border: none;
      te
    }
    .data2 {
      border: none;
      
    }
  }
  @media screen and (max-width: 425px) {
    display: flex;
  flex-direction: column;
    margin: 3rem 0;

    .icons_container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Footer;
