import styled from 'styled-components';

const FiltersStyle = styled.div`
  margin-right: 10px;
  
  .select-box {
    width: 100%;
  }

  @media (max-width: 992px) {
    margin-right: 0;

    .ant-affix {
      position: absolute !important;
      top: 0 !important;
    }
  }
`;

export default FiltersStyle;
