import heroImage1 from '../../assets/slider/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg'
import heroImage2 from '../../assets/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg'
import heroImage3 from '../../assets/slider/doctor-s-hand-holding-stethoscope-closeup.jpg'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'

export const Hero = () => {
  const words = ['Atención', 'Salud', 'Vida']
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((index + 1) % words.length)
        setFade(false)
      }, 250)
    }, 2500) // Cambia cada 2.5 segundos

    return () => {
      clearInterval(intervalId) // Limpia el intervalo cuando el componente se desmonta
    }
  }, [index])

  return (
    <section className='relative shadow-2xl rounded-b-3xl'>
      {/* Images Carrousel */}
      <Swiper
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        effect='fade'
        modules={[Autoplay, EffectFade]}
        className='h-[calc(100vh-5em)] rounded-b-3xl small-mobile:h-[calc(100vh-4em) large-mobile:h-[calc(100vh-4em)]'
      >
        <SwiperSlide>
          <img
            className='object-cover object-top h-full w-full'
            src={heroImage1}
            alt='portrait-successful-mid-adult-doctor-with-crossed-arms'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-cover object-left-top h-full w-full'
            src={heroImage2}
            alt='young-asian-female-dentist-white-coat-posing-clinic-equipment'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-cover object-left-top h-full w-full'
            src={heroImage3}
            alt='doctor-s-hand-holding-stethoscope-closeup'
          />
        </SwiperSlide>
      </Swiper>

      <article className='absolute bottom-0 right-0 bg-slate-100 z-10 p-8 w-3/6 h-1/3 flex flex-col justify-around rounded-tl-3xl rounded-br-3xl small-mobile:w-full small-mobile:h-1/4 small-mobile:p-4 small-mobile:rounded-3xl large-mobile:w-full large-mobile:h-1/3 big-mobile:h-1/3 big-mobile:w-full top-mobile:w-full top-mobile:h-1/3 tablet:w-3/4 tablet:h-1/4'>
        <h4 className='text-5xl font-semibold small-mobile:text-2xl large-mobile:text-3xl big-mobile:text-5xl'>
          Mejor <span className={`text-blue-600 ${fade ? 'animate-custom-fade-in' : 'animate-custom-fade-out'}`}>{words[index]}</span>
        </h4>
        <p className='text-xl opacity-70 font-light small-mobile:text-base large-mobile:text-lg big-mobile:text-2xl'>Don Bosco es un Laboratorio de Análisis Clínicos de amplia experiencia y alta tecnología.</p>
      </article>
    </section>
  )
}
