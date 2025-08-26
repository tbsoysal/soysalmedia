import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar"

const Projects = () => {
  const slideStyles = 'lg:!h-auto block max-w-[304px] !h-[288px] p-[31px] pb-[39px] border-[0.5px] border-[#49566f] rounded-[8px] bg-transparent text-white'
  return (
    <section className='px-4'>
      <h2 className='text-center text-[24px] md:text-[48px] lg:text-[56px] font-[500] text-white mb-5'>Yaptığımız Projeler</h2>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={12}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true, hide: false }}
        loop={true}
        autoplay={{
          delay: 2000
        }}
        speed={800}
        className='md:!hidden'
      >
        <SwiperSlide className={slideStyles}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          Slide 4
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Projects
