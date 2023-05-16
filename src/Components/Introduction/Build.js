import React from 'react'
import longArrow from "../../images/longArrow.png";
import styled from 'styled-components';

const Build = () => {
  return (
    <Wrapper>
      <div>
        <h1 >WHY BUILD</h1>
        <h1 className="intro-text">
          <span className="intro-text2">TO HYDRA VR</span> <img src={longArrow} alt="" />
        </h1>
      </div>

      <p>
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 6fr 6fr);
  place-items: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;

  .intro-text {
    display: flex;
  }

  .intro-text2 {
    padding: 1rem 0 0 0rem;
  }

  img {
    margin: -1.2rem 0 0 7rem;
  }
`;

export default Build
