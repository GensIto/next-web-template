import styled from 'styled-components';

export const ElasticityWrap = (props) => {
  // 呼び出したcomponent先でwidthを変えれるようにした
  return <StyledWrap data-level={props.width}>{props.children}</StyledWrap>;
};

const StyledWrap = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightblue;
  width: 48%;
  &[data-level='three'] {
    width: 32.5%;
  }
  &[data-level='four'] {
    width: 24%;
  }
`;
