import styled from "styled-components";

export const Section = styled.section`
  width: 50vw;
  height: 60vh;
  border-radius: 10px;
  display: flex;
  flex-direction: inline;
  justify-content: end;
  margin: auto;
  gap: 5px;
  color: #0d1126;
  background: #ece3e1;
  box-shadow: 2px 2px 15px 2px #2a2a2a;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 80vh;
    width: 50vh;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  clip-path: circle(50% at 50% 50%);
`;
export const Form = styled.form``;
export const H1 = styled.h1``;
export const Footer = styled.footer`
  white-space: nowrap;
  font-size: 0.6rem;
  padding: 4px;
  width: 100%;
  text-align: center;
`;
export const Div = styled.div`
  &.svg {
    width: 100%;
    border-radius: 0px 0px 0px 10px;
  }
  &.formulario {
    width: 100%;
    min-height: 100vh;
    background: grey;
    display: flex;
    align-items: center;
  }
  &.container {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    gap: 4px;
    padding: 10px;

    .title {
      span:last-child {
        display: flex;
        color: #945995;
        width: 100%;
        padding: 4px;
      }
      span:first-child {
        display: flex;
        justify-content: end;
        width: 100%;
      }
    }
    .account {
      height: 50%;
      display: flex;
      flex-direction: column;

      span {
        align-items: center;
        display: flex;
      }
      span:last-child {
        color: #945995;
        align-items: center;
        display: flex;
        cursor: pointer;

        .IoChevronForward {
          transform: translateY(2px);
        }
      }
    }
    .socials {
      height: 50%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      .social_authentication {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 100%;
        gap: 3px;
        width: 100%;
        color: #E34933;

        div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 3px;
          justify-content: space-around;
          font-size: 1rem;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid #bdaac2;

          :hover {
            border: 1px solid #6a316a;
            transition: 0.6s ease;
          }
        }
      }
    }

    form {
      height: 100%;
      width: 100%;
      gap: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;
export const Span = styled.span``;
