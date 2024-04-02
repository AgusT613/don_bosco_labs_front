import { useForm } from 'react-hook-form'
import { requirements } from '../services/fieldValidate'
import { DataLabel } from './DataLabel'

export const ContactForm = () => {
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
        errorInfo={errors.fullName}
        htmlFor='fullName'
        labelText='Nombre completo'
      >
        <input
          className='w-full p-2 focus:outline-none'
          type='text'
          name='fullName'
          placeholder='Matias Hernandez'
          {...register('fullName', requirements.fullName)}
        />
      </DataLabel>
      <DataLabel
        errorInfo={errors.telephone}
        htmlFor='telephone'
        labelText='Número de telefono'
      >
        <input
          className='w-full p-2 focus:outline-none'
          type='telephone'
          name='phone'
          placeholder='011-1456-7890'
          {...register('telephone', requirements.telephone)}
        />
      </DataLabel>
      <DataLabel
        className='col-span-2'
        errorInfo={errors.email}
        htmlFor='email'
        labelText='Correo Electrónico'
      >
        <input
          className='w-full p-2 focus:outline-none'
          type='email'
          name='email'
          placeholder='matias@example.com'
          {...register('email', requirements.email)}
        />
      </DataLabel>
      <DataLabel
        className='col-span-2'
        errorInfo={errors.description}
        htmlFor='description'
        labelText='Mensaje'
      >
        <textarea
          className='w-full h-32 focus:outline-none p-2'
          name='message'
          {...register('description', requirements.description)}
        />
      </DataLabel>
      <button type='submit' className='bg-slate-400 transition-all duration-200 col-span-2 p-2 w-32 mx-auto text-lg hover:bg-slate-600 hover:text-white small-mobile:w-full'>Enviar</button>
    </form>
  )
}
