import styled from 'styled-components';

export const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1023px) {
    width: 25vw;
    height: 75vh;
    margin: 10vh auto;
    border: 1px solid #52526a;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px 2px rgb(130, 130, 130);
  }
`;
