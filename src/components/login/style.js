import styled from "styled-components";

export const Section = styled.section`
  width: 450px;
  height: 70vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  gap: 5px;
  align-items: center;
  border-radius: 10px;
  margin: 0 auto;
  background: #ffff;

  @media (max-width: 600px) {
    width: 375px;
    height: 80vh;
  }

  .footer {
  }

  div:first-child {
    display: flex;
    gap: 4px;
    flex-direction: column;
    width: 100%;

    .IoCloseSharp {
      width: 20px;
      height: 20px;
      background: #f25c5c;
      border-radius: 3px;
      cursor: pointer;
    }
    span:first-child {
      display: flex;
      flex-direction: inline;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    span:last-child {
      display: flex;
      color: #f25c5c;
      width: 100%;
      text-align: center;
    }
  }

  form {
    width: 100%;
  }
  .check {
    display: flex;
    flex-direction: column;
    button {
      padding: 4px;
    }
  }
  .password {
    padding: 4px;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    input {
      padding: 4px;
    }
  }
  .name {
    padding: 4px;
    display: flex;
    flex-direction: column;

    input {
      padding: 4px;
    }
  }
  .email {
    padding: 4px;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    input {
      padding: 4px;
    }
  }

  .checkbox {
    padding: 4px;
    display: flex;
    flex-direction: inline;
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
`;
export const Span = styled.span``;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const H2 = styled.h2`
  color: #0d1126;
`;
export const Div = styled.div``;
export const Label = styled.label`
  color: #0d1126;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background: #F2F2F2;
  padding: 4px;
  :focus {
    border: 1px solid #f25c5c;
    transition: 0.5s ease;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  background: #f25c5c;
  border: 2px solid #bf4b4b;
  border-radius: 5px;
  color: #f2f2f2;

  :hover {
    background: #bf4b4b;
    transition: 0.4s ease;
  }
`;
export const Form = styled.form``;
export const Fieldset = styled.fieldset`
  padding: 3px;
  border: none;
  border-top: 1px solid grey;
`;
