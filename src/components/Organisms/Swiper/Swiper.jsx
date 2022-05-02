import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react'; //カルーセルに必要なタグをインポート
import SwiperCore, {Pagination, Autoplay, EffectFade} from 'swiper'; //欲しい機能をインポート
import s from './swiper.module.css'; //同じディレクトリにCSSを用意

SwiperCore.use([Pagination, Autoplay, EffectFade]);

// カルーセルにする画像のソースをリストにします
const images = [
  './images/swiper/dummy01.jpg',
  './images/swiper/dummy02.jpg',
  './images/swiper/dummy03.jpg',
  './images/swiper/dummy04.jpg'
];

const MySwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${s.custom_bullet}`, //非アクティブなアイコンのクラスを指定
        bulletActiveClass: `swiper-pagination-bullet-active ${s.custom_bullet_active}` //アクティブなアイコンのクラスを指定
      }}
      autoplay={{delay: 1000, disableOnInteraction: true}}
      speed={500}
      effect="fade"
      fadeEffect={{crossFade: true}}
      loop={true}
    >
      {images.map((src, index) => {
        return (
          <SwiperSlide key={`${index}`}>
            <img className="mx-auto w-full " src={src} alt="test_image" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
