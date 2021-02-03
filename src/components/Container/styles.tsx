import styled from 'styled-components';

const containerStyles = styled.div`
  #header {
    overflow: hidden;
    position: fixed; 
    top: 0; 
    width: 100%;
    z-index: 100;
  }
  @media (min-width: 576px) {
    #header {
      height: 68px;
    }
  }
`;

export default containerStyles