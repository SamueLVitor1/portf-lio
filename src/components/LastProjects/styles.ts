import styled from "styled-components";

export const LastProjectsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a{
    color: #000;
    text-decoration: none;
  }

  li{
    padding: 1rem;
    padding-bottom: 2rem;
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

    img{
      width: 150px;
      height: 117px;
      border: 1px solid #52525b;
      border-radius: 4px;
      object-fit: fill;
    }

    
  }
`