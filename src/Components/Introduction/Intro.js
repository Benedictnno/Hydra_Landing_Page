import React from "react";
import About from "./About";
import Build from "./Build";
import longArrow from "../../images/longArrow.png";
import styled from "styled-components";
const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="responsive_intro">
          <h1>INTRODUCTION</h1>
          <h1 className="intro-text">
            <span className="intro-text2">TO HYDRA VR </span>{" "}
            <img src={longArrow} alt="" />
          </h1>
        </div>

        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </section>

      <About />
      <Build />
    </>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 6fr 6fr);
  place-items: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
  .intro-text {
    display: flex;
  }

 
`;

export default Intro;
