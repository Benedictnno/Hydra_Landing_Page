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
      {data.map((imgs) => {
        return <img src={imgs} alt="" className="image" key={imgs} />;
      })}
    </div>
  );
}


export default ContainerImage
