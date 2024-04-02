import { BsPatchCheckFill, BsFillPersonCheckFill } from 'react-icons/bs'
import { IoBookSharp } from 'react-icons/io5'
import { GrCertificate } from 'react-icons/gr'
import { TimeLineArticle } from '../TimeLineArticle'

export const TimeLine = () => {
  return (
    <section id='timeline'>
      <h2 className='text-4xl font-bold mb-10 text-center small-mobile:text-2xl large-mobile:text-3xl'>Nuestros Avances</h2>
      <div className='flex items-center flex-col'>
        <TimeLineArticle
          title='Vacunas Gripe - Covid'
          textDescription='Aplicaciones a demanda, sin turno previo'
        >
          <BsPatchCheckFill />
        </TimeLineArticle>
        <TimeLineArticle
          title='Consultas sobre estudios'
          textDescription='Estudios informados y revisados por especialistas en la materias'
        >
          <IoBookSharp />
        </TimeLineArticle>
        <TimeLineArticle
          title='Sólo Enfermeros/as Certificados'
          textDescription='Toda la atencion de enfermeria es llevada a cabo por personal capacitado y con estudios universitarios'
        >
          <GrCertificate />
        </TimeLineArticle>
        <TimeLineArticle
          title='Chequeos Laborales'
          textDescription='Realizamos estudios y análisis preventivos de salud al personal de tu empresa'
          timeTextDescription='a partir del 04-01-2023'
          timeLineReachEnd
        >
          <BsFillPersonCheckFill />
        </TimeLineArticle>
      </div>
    </section>
  )
}
