import styled from 'styled-components';

export const DropDownDownArrow = () => {
  return (
    <div className="flex items-center">
      <ClickBtn>Click</ClickBtn>
    </div>
  );
};

const ClickBtn = styled.h1`
  text-align: center;
  font-size: 16px;
  position: relative;
  color: #fff;
  padding: 0.5rem;
  width: 100%;
  background: gray;
  &::after {
    top: 30%;
    right: 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: block;
    content: '';
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(-45deg);
  }
  &::before {
    top: 30%;
    left: 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: block;
    content: '';
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(-45deg);
  }
`;
