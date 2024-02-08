import styled from "styled-components";

export const MyTechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  h2{
    font-size: 2.4rem;
    display: flex;
    margin: 1rem 0;
    align-items: center;
    gap: 6px;
  }

  ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap:12px;
    flex-wrap: wrap;
  }
`