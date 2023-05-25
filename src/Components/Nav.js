import React from 'react'
import Burger from './Burger';
import styled from 'styled-components'
import vector from '../images/Vector.png'
import Group from '../images/Group.svg'

const NavBar = styled.nav`
  // width: 100%;
  heigth: 65px;
  border-bottom: 2px solid trasparent;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  margin: 1rem 0;

  .logo {
    padding: 0.8rem 0;
    display: flex;
    font-size: 30rem;
  }

  .responsive {
    width: 100%;
    max-width: 3.5rem;
    max-height: 4rem;
    height: auto;
    padding: .2rem ;
  }
`;
const Nav = () => {

  return (
    <NavBar>
      <div className="logo">
        <img src={vector} alt="" className='responsive'/>
        <img src={Group} alt="" className='responsive'/>
      </div>
      <Burger />
    </NavBar>
  );
}

export default Nav
