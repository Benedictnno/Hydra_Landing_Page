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

          cols="20"
          rows="7"
        ></textarea>
        <button>Send to Hydra</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(90deg, #343045, #c0b7e8, #8176af, #343045);
  width: 50vw;
  display: block;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    justif-content: center;
    align-items: center;
    gap: .5rem;
  }

  textarea,
  .subject {
    padding: 1em 11rem;
    font-size: 1rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 6fr);
    place-items: center;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 1.3rem 2rem;
    border: 1px solid #8176af;
    border-radius: 1rem;
    margin: 0.5rem 1rem;
    background-color: #343045;
    color: #8176af;
  }

  button {
    font-size: 1rem;
    padding: 1.3rem;
    border: 1px solid #8176af;
    border-radius: 1rem;
    margin: 0.5rem 1rem;
    background-color: #343045;
    color: #8176af;
  }

  @media screen and (max-width: 320px) {
    width: 100vw;

    input,
    textarea {
      font-size: 1rem;
      width: 40vw;
      border: 1px solid #8176af;
      border-radius: 1rem;
      margin: 0.5rem;
      background-color: #343045;
      color: #8176af;
    }

    div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
    }
    textarea,
    .subject {
      width: 40vw;

      font-size: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100vw;

    input,
    textarea {
      font-size: 1rem;
      padding: 1.3rem 5rem;
      border: 1px solid #8176af;
      border-radius: 1rem;
      margin: 0.5rem;
      background-color: #343045;
      color: #8176af;
    }

    div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
    }
    textarea,
    .subject {
      padding: 1.3rem 5rem;
      font-size: 1rem;
    }
  }
`;

export default Form
