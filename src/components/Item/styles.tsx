import styled from 'styled-components';

const ItemStyles = styled.div`
  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card-image {
    width: 70%; 
    height: 200px;
    margin-top: 10px;
  }

  .card-btn {
    width: 100%; 
    background: none; 
    color: var(--primary-color);
  }

  .card-btn:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
  }

  .divider {
    margin: 10px 0;
  }

  .card-info {}

  .price-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .price {
    display: flex;
  }

  .amount {}

  .save {}

  .original-price {
    text-decoration: line-through;
  }

  .count-down {}

  .sold {
    display: flex;
    padding-bottom: 10px;

    span {
      padding-right: 5px;
    }
  }

  .discount-percent {
    position: absolute;
    top: 5px;
    left: 0;
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
    color: var(--secondary-color);
    padding: 5px;
  }

  .wishlist {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default ItemStyles;
