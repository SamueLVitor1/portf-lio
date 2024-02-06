import styled from "styled-components";

export const ContanctPageContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 40rem;
  margin-top: 6rem;

  h1{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #134e4a;
    font-size: 4rem;
  }
  
  section{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div{
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 3rem;

      a {
        color: #000;
        text-decoration: none;
        position: relative;

        &:before,
        &:after {
          position: absolute;
          background-color: #000;
          content: "";
          display: block;
          width: 0;
          height: 2px;
          transition: width 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        &:before {
          left: 0;
          bottom: 0;
        }

        &:after {
          right: 0;
          bottom: 0;
        }

        &:hover:before,
        &:hover:after {
          width: 50%;
          color: red;
        }
      }
    }
  }
`