import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 15px;
  background:  #eef3f6;
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  gap: 5px;
  align-items: center;

  .logo{
    width:100%;
    
  }



  @media(max-width:700px){
    display:flex;
    background: #ffff;
  }
  .on{
    width: 50px;
    height: 50px;
    animation-duration: 1s;
    animation-name: hamburguerOn;
    animation-fill-mode: both;

    @media (min-width: 700px){
    display: none;
  }

  @keyframes hamburguerOn {
    100%{
    transform: rotate(180deg);
    }
  }
     
  }
  .off{
    width: 50px;
    height: 50px;
    display: none;
    
    @media (min-width: 700px){
      display: none;
  }

 

  

  }
}
`;
export const Nav = styled.nav(
  ({ popup }) =>
    `
  background:  #eef3f6;
  height: 110%;
  width: 100%;
  transform: translateX(3px);

    
    
  @media (max-width: 700px) {
    display: ${popup ? "flex" : "none"};
    position: absolute;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background:#ffff;
    transform: translate(80px ,24vh);
    padding:10px;
    animation-duration: 0.8s ease;
    animation-name: ${popup ? "popupOn" : ""};
    animation-fill-mode: both;
    box-shadow: 2px 2px 20px 1px #5b5f71;
  

    @keyframes popupOn {
    0%{
      width:0px;
      height:0px;
    }
    100%{
      width:300px;
      height:250px;
      }
    }
   

    & ul{

      display:flex;
      flex-direction: column;
      gap:40px

      
      
    }

    li{
      text-align:center;
    }


    .login{
      color: #a0a1ac;
      text-align:center;
      border-top: 1px solid #a0a1ac;

      }
    }
}
  
`
);

export const Ul = styled.ul`
  display: flex;
  padding: 5px;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 5px;
  width: 100%;

  & .login {
    margin-left: 50px;
    margin-right: 50px;
    color: hsl(230, 11%, 40%);
  }
`;
export const Li = styled.li`
  list-style: none;
  color: #0d1126;
  font-weight: 600;
`;
export const Div = styled.div`
  margin-left: 10px;
  width: 100%;
`;
export const Img = styled.img`
  margin-left: 5px;
`;
