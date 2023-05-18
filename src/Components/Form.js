import React from 'react'
import styled from 'styled-components';
const Form = () => {

  return (
    <Wrapper>
      <form action="">
        <h1>JOIN HYDRA</h1>
        <h1>Let's Build Your VR Experience</h1>
        <div>
          <input type="text" placeholder={"First Name"} />
          <input type="text" placeholder={"Last Name"} />
          <input type="email" placeholder={"Email"} />
          <input type="number" placeholder={"Phone Number"} />
        </div>

        <input type="text" placeholder={"Subject"} className='subject'/>
        <textarea
          name=""
          placeholder={"Tell Us Something..."}
          id=""

          cols="30"
          rows="10"
        ></textarea>
        <button>Send to Hydra</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(90deg, #343045, #c0b7e8, #8176af, #343045);
  width: 70vw;
  display: block;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    justif-content: center;
    align-items: center;
    gap: 1rem;
  }

  textarea,
  .subject {
    padding: 1.3rem 18.5rem;
    font-size: 1.2rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 6fr);
    place-items: center;
  }

  input,
  textarea {
    font-size: 1.2rem;
    padding: 1.3rem 6rem;
    border: 1px solid #8176af;
    border-radius: 1rem;
    margin: 0.5rem 1rem;
    background-color: #343045;
    color: #8176af;
  }

  button {
    font-size: 1.2rem;
    padding: 1.3rem ;
    border: 1px solid #8176af;
    border-radius: 1rem;
    margin: 0.5rem 1rem;
    background-color: #343045;
    color: #8176af;
  }
`;

export default Form
