import styled from 'styled-components';
import userInterface from '../../../assets/user-interface.svg';

const LoginStyles = styled.div`
  background: var(--secondary-color);

  .form {
    height: 80vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .mx-user-account {
    margin: 0 10px 0 26px;
  }

  .image {
    height: 80vh;
    width: 100%;
    background-image: url(${userInterface});
    background-repeat: no-repeat;
    background-size: contain;
  }

  .image-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color)
  }
`;

export default LoginStyles;