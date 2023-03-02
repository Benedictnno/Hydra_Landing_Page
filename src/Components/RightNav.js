import React, { useContext } from 'react'
import styled from 'styled-components';
import { Appcomponet } from '../App';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;

  li {
    padding: 0.75rem;
    cursor:pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d253b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }

  .mid-nav{
    display: flex;
  }

`;
const RightNav = () => {
  const { setSignUp,open,setOpen } = useContext(Appcomponet);
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>services</li>
      <li>Technologies</li>
      <li>How to </li>

      <div className="mid-nav">
        <li className="contact">Contact us</li>
        <li className="join" onClick={(() => {return setSignUp(true), setOpen((prev) =>!prev)})}>
          Join Hydra
        </li>
      </div>
    </Ul>
  );
};

export default RightNav
