import {Button} from '../components/Atoms/Button/Button';
import HomeLayout from '../components/Templates/HomeLayout';
import {ArrowButton} from '../components/Atoms/Button/ArrowButton';
import {FlexItem} from '../components/Molecules/FlexItem';
import {DropDownMenu} from '../components/Molecules/DropDownMenu';
import ScrollAnimation from '../hooks/ScrollAnimation';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeLayout title={'HOME'} description={'ここにサイトの説明文'}>
      <h1>Home</h1>
      <Button color="" txt="test" />
      <Button color="green" txt="test" />
      <Button color="blue" txt="test" />
      <Button color="yellow" txt="test" />
      <Button color="red" txt="test" />
      <div>
        <ArrowButton color="" txt="test" />
        <ArrowButton color="green" txt="test" />
        <ArrowButton color="blue" txt="test" />
        <ArrowButton color="yellow" txt="test" />
        <ArrowButton color="red" txt="test" />
      </div>
      <div className="flex justify-between">
        <FlexItem />
        <FlexItem />
        <FlexItem />
      </div>
      <DropDownMenu />
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
    </HomeLayout>
  );
}

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: #333;
  margin: 10rem auto;
`;
