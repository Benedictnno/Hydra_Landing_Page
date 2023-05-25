import React from "react";
import styled from "styled-components";
import {AiOutlineArrowRight} from "react-icons/ai";
const Activities = () => {
  const data = [
    {
      num: '01',
      icon: <AiOutlineArrowRight />,
      text: `3D Conception & Design`,
    },
    {
      num: '02',
      icon: <AiOutlineArrowRight />,
      text: `Interactive Design`,
    },
    {
      num: '03',
      icon: <AiOutlineArrowRight />,
      text: `VR World User Testing`,
    },
    {
      num: '04',
      icon: <AiOutlineArrowRight />,
      text: `Hydra VR Deploy`,
    },
  ];
  return <Wrapper>
    {data.map(({num,icon,text})=>{
      return(

        <div className="container" key={num}> 
            <h2 className="">{num}</h2>
            <div className="flex">

            <span className="icon"> {icon}</span>
            <p>{text} </p>
            </div>
        </div>
      )
    })}
  </Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  overflow-x: auto;

  .container {
    display: block;
    margin: 1rem auto;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-weight: 900;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: linear-gradient(90deg, #8176af, #c0b7e8);
    border: 10px solid;
  }

  .flex {
    display: flex;
    font-size: 1.2em;
    font-weight: 900;
    margin: 1rem 0;
    color: #fff;
  }

  .icon {
    color: #c0b7e8;
    font-size: 1.5rem;
  }
`;

export default Activities;
