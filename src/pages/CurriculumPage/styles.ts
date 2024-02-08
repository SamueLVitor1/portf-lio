import styled from "styled-components";

export const CurriculumContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 40rem;
  margin-top: 6rem;
  margin-bottom: 1rem;

  h1{
    color: #3730a3;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  section{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ul{
      margin-left: 2rem;
    }
  }

  @media (max-width: 900px) {
    padding: 2rem;
    margin-left: 0rem;
  }
`