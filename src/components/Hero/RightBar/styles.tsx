import styled from 'styled-components';

const RightBarStyles = styled.div`
  .box {
    flex-direction: column;
    
    &:hover{
      color: var(--primary-color); 
      cursor: pointer;
    }
  }

  .icon {
    font-size: 50px;
  }
`;

export default RightBarStyles;
 