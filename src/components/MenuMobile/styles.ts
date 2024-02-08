import styled, { css } from "styled-components";

interface ContainerProps {
  menuIsVisible: boolean
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 300px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0891b2;
  background: linear-gradient(34deg, #67e8f9 0%, #155e75 95%);

  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateX(-50px);
  
  svg{
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  a{
    text-decoration: none;
    list-style: none;
    color: #fff;
  }

  ${({menuIsVisible})=> menuIsVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);

    >svg{
      transform: rotate(0deg);
    }

    nav{
      transform: scale(1);
    }
  `}
`