import styled from 'styled-components';

const ProductStyles = styled.div`
  background: var(--secondary-color);
  height: 80vh;

  .row {
    height: inherit;
  }
  
  .product-image-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .product-image {
    height: 340px;
    width: 340px;
  }

  .product-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  .single-product-price {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }

  .quantity {
    display: flex;
    align-items: center;
  }

  .quantity .txt {
    margin-right: 10px;
  }

  .quantity-btn .txt-btn {
    pointer-events: none;
  }

  .action-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .buy-btn {
    background: var(--primary-color);
    color: var(--secondary-color);
    width: 100px;
  }
`;

export const SellerInfoStyles = styled.div`
  background: var(--secondary-color);
`;


export default ProductStyles;
