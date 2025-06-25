
import styled from 'styled-components';

const Button = ({jim}:{jim:string}) => {
  return (
    <StyledWrapper>
      <div className="button">
        <span className="text">{jim}</span>
        <span className="arrow" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --color:rgba(4,184,213,0.2);
    padding: 1rem 2rem;
    background-color: transparent;
    color: var(--color);
    font-weight: bolder;
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
  }

  .arrow {
    display: inline-flex;
    position: relative;
    width: 30px;
    height: 15px;
    margin-left: 0.5rem;
  }

  .arrow::after,
  .arrow::before {
    content: "";
    display: inline-block;
    position: absolute;
    border-color: var(--color);
  }

  .arrow::after {
    width: 10px;
    height: 0;
    border: 2px solid var(--color);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .arrow::before {
    width: 10px;
    height: 10px;
    border-top: 4px solid var(--color);
    border-right: 4px solid var(--color);
    left: 3px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .button:hover {
    background-color: var(--color);
    color: white;
  }

  .button:hover .arrow {
    transform: translateX(10px);
  }

  .button:hover .text {
    transform: translateX(10px);
  }

  .button:hover .arrow::after {
    width: 25px;
    border-color: white;
  }

  .button:hover .arrow::before {
    left: 15px;
    border-color: white;
  }

  .button,
  .text,
  .arrow,
  .arrow::after,
  .arrow::before,
  .button::before,
  .button::after {
    transition: all 0.3s, box-shadow 0.2s;
  }

  .button::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 10px;
    border-radius: 5px;
    border: solid 3px var(--color);
    border-right-color: transparent;
    background-color: transparent;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .button::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 10px;
    border-radius: 5px;
    border: solid 3px var(--color);
    border-left-color: transparent;
    background-color: transparent;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .button:hover:before,
  .button:hover:after {
    width: 50% !important;
  }

  .button:active {
    box-shadow: 0px 0px 0px 7px rgba(79, 78, 105, 0.295);
  }`;

export default Button;
