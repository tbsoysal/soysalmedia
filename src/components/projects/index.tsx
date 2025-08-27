import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar"
import Project from './Project.tsx';

const Projects = () => {
  const slideStyles = 'relative block !w-[304px] !h-[288px] p-[31px] pb-[39px] border-[0.5px] border-[#49566f] rounded-[8px] bg-transparent text-white'
  return (
    <section className='px-4 mb-[48px]'>
      <h2 className='relative text-center text-[24px] md:text-[48px] lg:text-[56px] font-[500] text-white mb-5'>Yaptığımız Projeler</h2>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={12}
        slidesPerView={'auto'}
        scrollbar={{ draggable: true, hide: false }}
        loop={true}
        autoplay={{
          delay: 2000
        }}
        speed={800}
        className='md:!hidden'
      >
        <SwiperSlide className={slideStyles}>
          <Project imagePath='./project1.png' liveUrl='https://tbsoysal.github.io/fashion-landing-page/' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Project imagePath='./project2.png' liveUrl='https://tbsoysal.github.io/real-estate-landing-page/' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Project imagePath='./project3.png' liveUrl='https://tbsoysal.github.io/resume-builder/' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Project imagePath='./project4.png' liveUrl='https://yenicarsipazari.com/' />
        </SwiperSlide>
      </Swiper>
      {/* Desktop Grid */}
      <div className='hidden md:!grid lg:!flex lg:flex-wrap lg:h-auto mx-auto [grid-template-columns:repeat(2,304px)] gap-4 justify-center'>
        <div className={slideStyles}>
          <Project imagePath='./project1.png' liveUrl='https://tbsoysal.github.io/fashion-landing-page/' />
        </div>
        <div className={slideStyles}>
          <Project imagePath='./project2.png' liveUrl='https://tbsoysal.github.io/real-estate-landing-page/' />
        </div>
        <div className={slideStyles}>
          <Project imagePath='./project3.png' liveUrl='https://tbsoysal.github.io/resume-builder/' />
        </div>
        <div className={slideStyles}>
          <Project imagePath='./project4.png' liveUrl='https://yenicarsipazari.com/' />
        </div>
      </div>
    </section>
  )
}

export default Projects
