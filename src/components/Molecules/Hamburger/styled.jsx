import styled from 'styled-components';
import {sp} from '../../../hooks/media';

export const HamburgerMenu = styled.div`
  ${sp`
    display: none;
  `}
`;

export const HamburgerMenuActive = styled.div`
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0;
  padding: 0 1rem 1rem 0;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
`;
