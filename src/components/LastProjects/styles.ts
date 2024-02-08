import styled from "styled-components";

export const LastProjectsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  a{
    color: #000;
    text-decoration: none;
  }

  li{
    padding: 1rem;
    padding-bottom: 2rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;
    border-bottom: 2px solid #a1a1aa;
    transition: all 0.2s;

    &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); /* Adicione a sombra suave aqui */
  }
   
    h3{
      margin-bottom: 8px;
    }

    p{
      max-height: 8rem;
      overflow: hidden;
    }

    img{
      width: 150px;
      height: 117px;
      border: 1px solid #52525b;
      border-radius: 4px;
      object-fit: fill;
    }
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`