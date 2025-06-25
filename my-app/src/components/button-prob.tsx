import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="bracket left">❴</span>
        <span className="text">code</span>
        <span className="bracket right">❵</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 50px;
    width: 30px;
    border: none;
    border-radius: 10px;
    -background-color: #fff;;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
  }
  .bracket {
    font-size: 18px;
    transition: all 0.3s;
    color:rgb(21, 218, 221) ;
  }
  .text {
    font-size: 15px;
    width: 0;
    transform: scale(0);
    transition: all 0.3s;
    color: white;
  }
  .button:hover {
    width: 100px;
  }
  .button:hover .text {
    transform: scale(1);
    width: 40px;
  }`;

export default Button;
