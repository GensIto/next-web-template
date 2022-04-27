import DirLayout from '../components/Templates/DirLayout';
import ScrollAnimation from '../hooks/ScrollAnimation';
import styled from 'styled-components';

export default function About() {
  return (
    <DirLayout title={'About'} description={'ここにサイトの説明文'}>
      <h1>About</h1>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
      <ScrollAnimation>
        <Box />
      </ScrollAnimation>
    </DirLayout>
  );
}

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: #333;
  margin: 10rem auto;
`;
