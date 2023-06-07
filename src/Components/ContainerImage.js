import React from 'react'
import unreal from "../images/unreal.png";
import unity from "../images/unity.png";
import oculus from "../images/oculus.png";
import vive from "../images/vive.png";
import styled from 'styled-components';
const ContainerImage = () => {
  const data = [unreal, unity, oculus, vive];

  return (
    <div className="image-container">
      {data.map((imgs ,index) => {
        return <img src={imgs} alt="" className={index===0? 'image image1': index===2 ?'image imagelast':  index===3 ?'image imagelast':'image'} key={index} />;
      })}
    </div>
  );
}


export default ContainerImage
