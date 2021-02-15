import styled from 'styled-components';

const SliderStyles = styled.div`
  .contentStyle {
    height: 400px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background: var(--primary-color);
  }

  .sliderImage {
    width: 120%;
    height: 90%;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    .contentStyle {
      height: 60%;
    }
  }
`;

export default SliderStyles;
