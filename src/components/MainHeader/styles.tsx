import styled from 'styled-components';

const MainHeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    display: flex;
    flex: 1;
    margin-right: 10px;
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

  .menu-button {
    margin-left: 10px;
  }

  .mobile-visible {
    display: none
  }

  @media (max-width: 576px) {
    .mobile-visible {
      display: block;
    }

    .mobile-hidden {
      display: none;
    }
  }
`;

export default MainHeaderStyles;
