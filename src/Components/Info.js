import React from 'react'
import {TfiLocationPin} from 'react-icons/tfi'
import { MdPhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import styled from 'styled-components';
const Info = () => {

    const data = [
      {
        icon: <TfiLocationPin />,
        header: "Pay US a Visit",
        text: "Union St, Seattle, WA 98101, United States",
      },
      {
        icon: <MdPhoneInTalk />,
        header: "Give Us a Call",
        text: "(110) 1111-1010",
      },
      {
        icon: <MdOutlineMailOutline />,
        header: "Send Us a Message",
        text: "Contact@HydraVTech.com",
      },
    ];
  return (
    <Wrapper className="responsive_info">
      {data.map(({ icon, header, text }, index) => {
        return (
          <article className={index === 1 ? "border" : null} key={index}>
            <div className="icon">{icon}</div>
            <div>
              <h3>{header}</h3>
              <p>{text}</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  // word-wrap: break-word;

  article {
    display: flex;
    margin: 2rem;
  }

  .icon {
    font-size: 3rem;
    color: var(--light-main-color1);
    padding: 0.3rem;
  }

  .border {
    padding: 0 2rem;
    border-left: 1px solid var(--light-main-color1);
    border-right: 1px solid var(--light-main-color1);
  }

  @media screen and (max-width: 768px) {
    .border {
      padding: 0;
      border: none;
    }
  }
`;
export default Info
