import styled from "styled-components";

export const PresentationContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
      color: #71717a;
      font-size: 1.7rem;
    };

    h2{
      font-size: 4.4rem;
      color: #18181b;
    }

    h3{
      font-size: 3.5rem;
      color: #27272a;
      opacity: 0.9;
    }
  }

  section{
    font-size: 1.7rem;
    text-transform: capitalize;
  }

  a{
    padding: 6px 18px;
    background: transparent;
    border: 1px solid black;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 2px;
    color: #000;
    text-decoration: none;

    &:hover{
      background-color: #09090b;
      color: #e4e4e7;
    }

  }
`