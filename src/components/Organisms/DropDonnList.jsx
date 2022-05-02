import React from 'react';
import ScrollAnimation from '../../hooks/ScrollAnimation';
import {DropDownMenu} from '../Molecules/DropDownMenu';

export const DropDonnList = () => {
  return (
    <ul className=" flex flex-col space-y-8">
      {ListItem.map((item) => (
        <li>
          <ScrollAnimation>
            <DropDownMenu
              key={item.id}
              title={item.title}
              content={item.content}
            />
          </ScrollAnimation>
        </li>
      ))}
    </ul>
  );
};

const ListItem = [
  {
    id: 1,
    title: 'Test1',
    content:
      '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  },
  {
    id: 2,
    title: 'Test2',
    content:
      '2親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  },
  {
    id: 3,
    title: 'Test3',
    content:
      '3親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  },
  {
    id: 4,
    title: 'Test4',
    content:
      '4親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  },
  {
    id: 5,
    title: 'Test5',
    content:
      '5親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  },
  {
    id: 6,
    title: 'Test6',
    content:
      '6親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から',
    src: './vercel.svg'
  }
];
