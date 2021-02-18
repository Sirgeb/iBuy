import styled from 'styled-components';

const MainHeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  .logo {
    display: flex;
    flex: 1;
    margin-right: 10px;
  }

  .icon {
    color: var(--black)
  }

  .logo img {
    margin-bottom: 10px;
  }

  .logo span {
    font-size: 22px;
  }

  .search-bar {
    display: flex;
    flex-direction: row;
    flex: 3.5;
    justify-content: space-between;
  }

  .search-bar .input {
    margin-right: 10px;
  }

  .right-bar {
    display: flex;
    justify-content: center;
    flex: 2;
  }

  /* .right-bar ul {
    width: 100%;
  } */

  .menu-button {
    margin-left: 10px;
  }

  .mobile-visible {
    display: none
  }

  @media (max-width: 650px) {
    .mobile-visible {
      display: flex;
    }

    .mobile-hidden {
      display: none;
    }
  }
`;

export default MainHeaderStyles;
