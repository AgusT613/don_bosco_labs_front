import { useForm } from 'react-hook-form'
import { requirements } from '../services/fieldValidate'
import { DataLabel } from './DataLabel'

export const AppointmentForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = data => {
    window.alert(`Formulario mandado con exito\n${JSON.stringify(data)}`)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bigger-devices:grid bigger-devices:grid-cols-2 mx-auto bg-slate-200 p-6 gap-4 small-mobile:flex small-mobile:flex-col large-mobile:flex large-mobile:flex-col big-mobile:flex big-mobile:flex-col top-mobile:flex top-mobile:flex-col'
    >
      <DataLabel
        htmlFor='fullName'
        labelText='Nombre completo'
        errorInfo={errors.fullName}
      >
        <input
          className='w-full p-2 focus:outline-none'
          name='fullName'
          type='text'
          placeholder='Matias Hernan'
          {...register('fullName', requirements.fullName)}
        />
      </DataLabel>
      <DataLabel
        htmlFor='email'
        labelText='Correo Electrónico'
        errorInfo={errors.email}
      >
        <input
          className='w-full p-2 focus:outline-none'
          name='email'
          type='email'
          placeholder='matias@example.com'
          {...register('email', requirements.email)}
        />
      </DataLabel>
      <DataLabel
        htmlFor='telephone'
        labelText='Número de telefono'
        errorInfo={errors.telephone}
      >
        <input
          className='w-full p-2 focus:outline-none'
          name='telephone'
          type='text'
          placeholder='011-1234-1234'
          {...register('telephone', requirements.telephone)}
        />
      </DataLabel>
      <DataLabel
        htmlFor='date'
        labelText='Fecha del turno'
        errorInfo={errors.date}
      >
        <input
          className='w-full p-2 focus:outline-none'
          name='date'
          type='date'
          {...register('date', requirements.date)}
        />
      </DataLabel>
      <DataLabel
        htmlFor='description'
        labelText='Observaciones'
        errorInfo={errors.description}
        className='col-span-2'
      >
        <textarea
          className='w-full h-32 focus:outline-none p-2 small-mobile:text-sm'
          name='description'
          {...register('description', requirements.description)}
        />
      </DataLabel>
      <button type='submit' className='bg-slate-400 transition-all duration-200 col-span-2 p-2 w-32 mx-auto text-lg hover:bg-slate-600 hover:text-white small-mobile:w-full'>Solicitar</button>
    </form>
  )
}
