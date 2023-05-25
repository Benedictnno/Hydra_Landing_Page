import React from 'react'
import longArrow from "../../images/longArrow.png";

const HowWeBuild = () => {
  return (
    <section className="intro HowSpacing">
      <div>
        <h1>INTRODUCTION</h1>
        <h1 className="intro-text">
          <span className="intro-text2">TO HYDRA VR </span>{" "}
          <img src={longArrow} alt="" />
        </h1>
      </div>

      <p>
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </p>
    </section>
  );
}

export default HowWeBuild
