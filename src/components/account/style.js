import styled from "styled-components";

export const Section = styled.section`
  width: 50%;
  margin: auto;
  height: 100%;
  display: grid;
  gap: 5px;
  padding: 10px;
  border-radius: 10px;
  grid-gap: 5px;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .oCloseSharp {
    width: 20px;
    cursor: pointer;
    height: 20px;
    background: #f25c5c;
    border-radius: 5px;
  }

  form {
    background: #ffff;
    border-radius: 10px;
    padding: 5px;
    width: 100%;

    .icon {
      justify-content: end;
      display: flex;
      flex-direction: inline;
      height: auto;
    }
    fieldset {
      border: none;
      height: 50%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      &.password {
        width: 100%;
        text-align: left;
        word-wrap: nowrap;
      }

      div:last-child {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        span {
          text-align: justify;
        }
      }
      div {
        input {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 500px) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: inline-block;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
      background: #ffff;
      border-radius: 10px;
      gap: 10px;
      width: 50%;
      height: 100%;
      .txt {
        text-align: center;
        span:last-child {
          color: #0000;
        }
      }
      .oCloseSharp {
        width: 20px;
        cursor: pointer;
        height: 20px;
        background: #f25c5c;
        border-radius: 5px;
      }

      span:last-child {
        font-size: 0.6rem;
        color: #f25c5c;
        letter-spacing: 1px;
      }
      fieldset {
        width: 100%;
        padding: 3px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: none;
        border-top: 1px solid grey;
        gap: 10px;

        div:last-child {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;

          @media (min-width: 800px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
          }
        }
        div {
          display: flex;
          flex-direction: column;

          input {
            border: none;
            outline: none;
            padding: 4px;
            :focus {
              border: 2px solid #f25c5c;
              transition: 0.2s ease-in-out;
            }
          }
        }
        .btn {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          gap: 6px;
          word-wrap: nowrap;
          cursor: pointer;
          flex-direction: inline;
          .IoChevronForwardOutline {
            transform: translateY(2px);
            color: #f25c5c;
          }
          button {
            width: 100%;
            height: 40px;
            cursor: pointer;
            background: #f25c5c;
            border: 2px solid #bf4b4b;
            border-radius: 2px;
            color: #f2f2f2;

            :hover {
              transition: 0.5s ease;
              background: #bf4b4b;
            }
          }
        }
      }
    }
    img {
      width: 100%;
    }
  }
`;
export const Fieldset = styled.fieldset``;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const Form = styled.form``;
export const Label = styled.label``;
export const Span = styled.span`
  width: 100%;
  height: 100%;
  font-size: 0.7rem;
  color: #0d1126;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 2px;
  background: #f2f2f2;
  :focus {
    border: 2px solid #945995;
    transition: 0.2s ease-in-out;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  background: #f25c5c;
  border: 2px solid #bf4b4b;
  border-radius: 2px;
  color: #f2f2f2;
`;
export const H1 = styled.h1`
  color: #0d1126;
`;
export const Div = styled.div``;
