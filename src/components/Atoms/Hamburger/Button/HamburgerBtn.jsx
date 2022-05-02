import styled from 'styled-components';
import {sp} from '../../../../hooks/media';

export const HamburgerBtn = () => {
  return (
    <>
      <StyledHamburgerBtn>
        <LineTop></LineTop>
        <LineCenter></LineCenter>
        <LineBottom></LineBottom>
      </StyledHamburgerBtn>
    </>
  );
};

const StyledHamburgerBtn = styled.div`
  display: none;
  ${sp`
    display: block;
    position: fixed;
    z-index: 3;
    transform: translateX(-50%);
    left: 50%;
    bottom: 12px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
`}
`;
const LineTop = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #333;
  transition: 0.3s ease-in-out;
  top: 10px;
`;
const LineCenter = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #333;
  transition: 0.3s ease-in-out;
  top: 20px;
`;
const LineBottom = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #333;
  transition: 0.3s ease-in-out;
  top: 30px;
`;
