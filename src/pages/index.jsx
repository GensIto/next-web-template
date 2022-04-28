import {Button} from '../components/Atoms/Button/Button';
import HomeLayout from '../components/Templates/HomeLayout';
import {ArrowButton} from '../components/Atoms/Button/ArrowButton';
import {FlexItem} from '../components/Molecules/FlexItem';
import {DropDownMenu} from '../components/Molecules/DropDownMenu';
import ScrollAnimation from '../hooks/ScrollAnimation';
import {KvImg} from '../components/Atoms/Kv/KvImg';
import {Section} from '../components/Organisms/Section';
import {Container} from '../components/Organisms/Container';

export default function Home() {
  return (
    <HomeLayout title={'HOME'} description={'ここにサイトの説明文'}>
      <Section top="none" bottom="">
        <Container size="full">
          <KvImg />
        </Container>
      </Section>

      <Section top="sm" bottom="sm">
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
          <DropDownMenu content="TEST1!!!" />
          <DropDownMenu content="TEST2!!!" />
          <DropDownMenu content="TEST3!!!" />
          <DropDownMenu content="TEST4!!!" />
        </Container>
      </Section>

      <Section top="lg" bottom="lg">
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
    </HomeLayout>
  );
}
