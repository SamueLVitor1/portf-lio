import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 40rem;
  margin-top: 6rem;
  margin-bottom: 4rem;

  h1{
    display: flex;
    align-items: center;
    gap: 6px;
    color: #27272a;
  }

  ul{
    list-style: none;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    li{
      border: 2px solid black;
      max-width: 40rem;
      min-width: 30rem;
      min-height: 32rem;
      border-radius: 4px;
      padding: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      header{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      img{
        width: 100%;
        height: 200px;
        border-radius: 4px;
        object-fit: cover;
        border: 1px solid #ccc;
      }

      section{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
        
        div{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-start;
          text-decoration: underline;
          text-transform: lowercase;
        }

        span:not(:first-child) {
         margin-left: 12px; 
        }
      }

      footer{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 5px;
        bottom: 0px;

        a{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 1px solid #000;
          padding: 8px;
          color: #000;
          cursor: pointer;
          text-decoration: none;
          border-radius: 6px;
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
          transition: all300ms ease;

          &:hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
             rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          }
        }
      };
    }
  }
`