import {Button} from '../components/Atoms/Button/Button';
import HomeLayout from '../components/Templates/HomeLayout';
import {ArrowButton} from '../components/Atoms/Button/ArrowButton';
import {FlexItem} from '../components/Molecules/FlexItem';
import {DropDownMenu} from '../components/Molecules/DropDownMenu';
import ScrollAnimation from '../hooks/ScrollAnimation';
import {KvImg} from '../components/Atoms/Kv/KvImg';
import {Section} from '../components/Organisms/Section';
import {Container} from '../components/Organisms/Container';
import {Tabs} from '../components/Molecules/Tabs';
import {MotionDemo} from '../components/Atoms/MotionDemo';
import {DropDonnList} from '../components/Organisms/DropDonnList';

export default function Home() {
  return (
    <HomeLayout title={'HOME'} description={'ここにサイトの説明文'}>
      <Section top="none" bottom="">
        <Container size="full">
          <KvImg />
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="full">
          <Button color="" txt="test" />
          <Button color="green" txt="test" />
          <Button color="blue" txt="test" />
          <Button color="yellow" txt="test" />
          <Button color="red" txt="test" />
          <ArrowButton color="" txt="test" />
          <ArrowButton color="green" txt="test" />
          <ArrowButton color="blue" txt="test" />
          <ArrowButton color="yellow" txt="test" />
          <ArrowButton color="red" txt="test" />
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="">
          <div className="flex justify-between">
            <div className="w-full">
              <DropDownMenu title="TEST1" content="TEST1!!!" />
            </div>
            <div className="w-full">
              <DropDownMenu title="TEST2" content="TEST2!!!" />
            </div>
            <div className="w-full">
              <DropDownMenu title="TEST3" content="TEST3!!!" />
            </div>
            <div className="w-full">
              <DropDownMenu title="TEST4" content="TEST4!!!" />
            </div>
          </div>
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="mqfull">
          <DropDonnList />
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="mqfull">
          <ScrollAnimation>
            <div className="flex justify-between">
              <FlexItem />
              <FlexItem />
              <FlexItem />
            </div>
          </ScrollAnimation>
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="mqfull">
          <Tabs />
        </Container>
      </Section>

      <Section top="md" bottom="md">
        <Container size="mqfull">
          <MotionDemo />
        </Container>
      </Section>
    </HomeLayout>
  );
}
