import styled from 'styled-components';
import {sp} from '../../../hooks/media';

export const HamburgerMenu = styled.div`
  ${sp`
    display: none;
  `}
`;

export const HamburgerMenuActive = styled.div`
  flex-direction: column;
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding-bottom: 50px;
`;
