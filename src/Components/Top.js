import React, { useContext } from 'react'
import Login from "./Login";
import TopImage from '../images/pexel.svg'
import arrow from '../images/arrow.svg'
import { Appcomponet } from '../App';

const Top = () => {
  const {setSignUp} = useContext(Appcomponet);
  return (
    <section className="Top">
      <article className="Top_a">
        <div className="Top-title">
          <span className="Top-text"> Dive</span> Into The Depths <br /> Of
          <span className="Top-text"> Virtual Reality</span>
        </div>
        <p className="Top-P">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, commodi
          modi, qui ducimus deleniti dolores vero veritatis, laborum vel officia
          dolor. Molestiae, qui. Sint, recusandae ad. Tenetur nulla saepe nam!
        </p>
        <Login />

        <div className="Top-btn-container">
          <button onClick={() => setSignUp(true)} className="Top-btn">
            BUILD YOUR WORLD{" "}
          </button>
          <img src={arrow} alt="arrow" />
        </div>
      </article>

      <article className="Top_img">
        <img src={TopImage} alt="" className="Top-image" />
      </article>
    </section>
  );
}

export default Top
