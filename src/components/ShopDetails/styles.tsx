import styled from 'styled-components';

const ShopStyles = styled.div`
  margin-right: 10px;

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 992px) {
    margin-right: 0;

    .ant-affix {
      position: absolute !important;
      top: 0 !important;
    }
  }
`;

export default ShopStyles;
