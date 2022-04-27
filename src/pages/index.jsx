import {Button} from '../components/Atoms/Button/Button';
import HomeLayout from '../components/Templates/HomeLayout';
import {ArrowButton} from '../components/Atoms/Button/ArrowButton';

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
    </HomeLayout>
  );
}
