import styled from 'styled-components';

export const DropDownUpArrow = () => {
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
    top: 45%;
    right: 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: block;
    content: '';
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(135deg);
  }
  &::before {
    top: 45%;
    left: 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: block;
    content: '';
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(135deg);
  }
`;
