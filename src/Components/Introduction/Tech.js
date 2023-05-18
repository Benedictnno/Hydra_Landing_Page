import React from 'react'
import vr from '../../images/vr.png'
import styled from 'styled-components'
import chevron from '../../images/chevron.png'
import unreal from '../../images/unreal.png'
import unity from '../../images/unity.png'
import oculus from '../../images/oculus.png'
import vive from '../../images/vive.png'
import longArrow from '../../images/longArrow.png'
const Tech = () => {
  const data = [unreal, unity,oculus,vive]
  return (
    <section>
        <Wrapper img={vr}>
          <section>

        <h1>TECHNOLOGIES & HARDWARE</h1>
        <h2>USED BY HYDRA VR.</h2>
        <img src={chevron} alt="" />

        <div className='image-container'>
          {data.map((imgs) => {
            return <img src={imgs} alt="" className="image" />;
          })}
        </div>
          </section>
    </Wrapper>

        <Text>
          <div>
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
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </Text>
      </section>
  );
}

const Wrapper = styled.section`
  background-image: url(${(props) => props.img});
  // background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  border-radius: 100px;
  height: 200px;
  text-align: center;
  display: block;
  margin: 3rem auto;
  color: #fff;

  .image-container {
    width: 32%;
    aspect-ratio: 3/2;
    object-fit: contain;
    display: flex;
    justify-content: center;
    margin: 7rem 20rem;
  }

  .image {
    margin: 1rem;
  }
`;

 const Text = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 2fr );
  place-items: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin-top: 17rem;
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
export default Tech
