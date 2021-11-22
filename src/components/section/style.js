import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 10px;

  &.componentOne {
    background: #ffff;
    align-items: end;
    display: flex;
    height: 100%;
    width: 100%;

    div {
      text-align: left;
    }
  }
  &.componentTwo {
    background: #ffff;
    padding: 0;
    display: flex;
    height: 100%;
    width: 100%;

    @media (max-width: 700px) {
      justify-content: end;
    }
  }
`;
export const Span = styled.span``;
export const Div = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  &.container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: inline;
    width: 100%;
    height: 100vh;
    padding: 0;

    @media (max-width: 700px) {
      flex-direction: column-reverse;
      min-height: 100vw;
    }
  }
  &.sectionOne {
    height: 50%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(-30px);
    .div_span {
      display: flex;
      gap: 10px;
      align-items: center;

      span:first-child {
        background: #0d1126;
        padding: 3px;
        width: 50px;
        text-align: center;
        align-items: center;
        border-radius: 40px;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.8rem;
      }
      span:last-child {
        color: #a0a1ac;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 3px;
      }
    }

    .txt {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      flex-direction: column;
      span:last-child {
        color: #a0a1ac;
      }
    }
    .div_btn {
      display: flex;
      gap: 10px;
      align-items: center;

      button:first-child {
        padding: 10px;
        border: 2px solid hsl(0, 97%, 74%);
        background: hsl(0, 100%, 68%);
        color: #fff;
        border-radius: 5px;
        font-size: 0.6rem;
      }
      span:last-child {
        color: #a0a1ac;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 700px) {
      height: 100%;
    }
  }

  &.sectionTwo {
    background: #eef3f6;
    height: 55%;
    width: 100%;
    border-radius: 0% 0% 0% 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 700px) {
      width: 50%;
      height: 100%;
    }
  }
`;

export const H1 = styled.h1`
  color: #0d1126;
  word-wrap: break-world;
`;
export const Img = styled.img`
  width: 630px;
  object-fit: cover;
  position: absolute;
  transform: translate(28px, 220px);

  @media (max-width: 700px) {
    width: 400px;
    transform: translate(-100px, 30px);
  }
`;

export const Button = styled.button`
  width: 120px;
`;
