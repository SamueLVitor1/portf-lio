import styled from "styled-components";

export const AsideContainer = styled.aside`
  background-color: #f1f5f9;
  padding: 2rem;
  display: flex;
  min-width: 24rem;
  max-width: 30rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: fixed;

  a{
    text-decoration: none;
  }

  img{
    width: 13.6rem;
    height: 13.6rem;
    border-radius: 100%;
    object-fit: contain;
  }

  nav{
    width: 100%;
    margin-top: 4rem;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li{
      padding: 10px;
      font-size: 1.8rem;
      color: #374151;
      border-radius: 2px;
      cursor: pointer;

      &:hover{
        background-color: #e5e7eb;
      }
    }
  }

  footer{
    position: absolute;
    bottom: 8px;
    width: 100%;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    a{
      color: #3f3f46;
      transition: all 0.2s ease-in-out;

      &:hover{
        transform: scale(1.1);
        filter: brightness(0.5);
      }
    }
  }

  @media (max-width: 900px) {
    display: none; 
  }
`

export const MenuHamburger = styled.div`
  width: 30px;
  position: absolute;
  top: 1rem;
  left: 1rem;
`