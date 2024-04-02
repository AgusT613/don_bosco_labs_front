import { AiFillTwitterCircle, AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer id='contact' className='bg-slate-100 pt-8 flex flex-col gap-4 mt-10'>
      <div className='bigger-devices:grid bigger-devices:grid-cols-4 bigger-devices:grid-rows-[1fr,auto] w-11/12 mx-auto gap-x-14 px-4 tablet:grid tablet:grid-cols-2'>
        <section className='flex flex-col gap-5 col-span-2'>
          <h5 className='text-2xl font-semibold small-mobile:text-lg'>Horario de atención</h5>
          <ul>
            <li className='text-lg small-mobile:text-sm text-gray-500 flex justify-between py-3'>
              <span>Lunes a Viernes</span>
              <span>8:00 AM - 4:30 PM</span>
            </li>
            <li className='text-lg small-mobile:text-sm text-gray-500 flex justify-between py-3 border-y-[1px] border-slate-300'>
              <span>Sábado</span>
              <span>10:30 AM - 5:30 PM</span>
            </li>
            <li className='text-lg small-mobile:text-sm text-gray-500 flex justify-between py-3'>
              <span>Domingo</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </section>
        <section className='flex flex-col gap-5'>
          <h5 className='text-2xl font-semibold small-mobile:text-lg'>Laboratorio</h5>
          <div className='flex flex-col gap-4 text-lg small-mobile:text-sm opacity-60'>
            <p className='hover:opacity-80'>
              <a href='mailto:info@laboratorio.com.ar'>info@laboratorio.com.ar</a>
            </p>
            <p className='text-base small-mobile:text-sm'>San Martín 2564, Rosario, Provincia de Santa Fé</p>
          </div>
        </section>
        <section className='flex flex-col gap-5'>
          <h5 className='text-2xl font-semibold small-mobile:text-lg'>Redes</h5>
          <div className='text-4xl flex justify-between'>
            <a href='#'>
              <AiFillFacebook className='text-blue-500' />
            </a>
            <a href='#'>
              <AiFillInstagram className='text-violet-500' />
            </a>
            <a href='#'>
              <AiFillTwitterCircle />
            </a>
            <a href='#'>
              <AiFillYoutube className='text-red-500' />
            </a>
          </div>
        </section>
      </div>
      <div className='flex justify-center items-center text-xl opacity-80 py-4 bg-blue-100 font-semibold small-mobile:text-sm large-mobile:text-base'>
        <p>Desarrollado con ❤ por AgusT613</p>
      </div>
    </footer>
  )
}
