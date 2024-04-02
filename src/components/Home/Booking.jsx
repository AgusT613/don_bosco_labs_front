import { useState } from 'react'
import { AppointmentForm } from '../AppointmentForm'
import { ContactForm } from '../ContactForm'

export const Booking = () => {
  const [formulario, toggleFormulario] = useState(true)

  return (
    <section id='booking' className='w-3/4 mx-auto small-mobile:w-full large-mobile:w-full big-mobile:w-10/12 top-mobile:w-full tablet:w-10/12'>
      <div className='py-6'>
        <h2 className='text-4xl font-bold text-center mb-4 small-mobile:text-2xl large-mobile:text-3xl'>Solicitar</h2>
        <div className='grid grid-cols-2'>
          <span
            className={`text-xl p-3 cursor-pointer w-full hover:bg-slate-300 text-center ${formulario && 'bg-slate-200'} small-mobile:text-lg large-mobile:text-lg`}
            onClick={() => toggleFormulario(true)}
          >
            Turno
          </span>
          <span
            className={`text-xl p-3 cursor-pointer w-full hover:bg-slate-300 text-center ${!formulario && 'bg-slate-200'} small-mobile:text-lg large-mobile:text-lg`}
            onClick={() => toggleFormulario(false)}
          >
            Contacto
          </span>
        </div>
      </div>
      {formulario
        ? (
          <AppointmentForm />
          )
        : (
          <ContactForm />
          )}
    </section>
  )
}
