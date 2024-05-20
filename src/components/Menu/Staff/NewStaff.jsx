import { useForm } from 'react-hook-form'
import { DataLabel } from '../../DataLabel'
import { requirements } from '../../../services/fieldValidate'
import { API_STAFF } from '../../../services/dotenv.config'
import { ToastContainer } from 'react-toastify'
import { HeaderGoBack } from '../../HeaderGoBack'
import { FormLayout } from '../../FormLayout'
import { apiUserManage } from '../../../services/apiUserManage'
import 'react-toastify/dist/ReactToastify.min.css'

export const NewStaff = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = staffData => {
    apiUserManage({
      method: 'POST',
      apiUrl: API_STAFF,
      dataModel: staffData,
      msgInCaseOfSuccess: 'El dato se incorporó correctamente'
    })
    reset()
  }

  return (
    <div className='grid justify-items-center min-h-screen'>
      <HeaderGoBack pageSectionLabel='Nuevo Personal' />
      <FormLayout
        onSubmit={handleSubmit(onSubmit)}
        buttonActionLabel='Crear'
      >
        <DataLabel
          errorInfo={errors.name}
          htmlFor='name'
          labelText='Nombre'
        >
          <input
            placeholder='Pablo Elias'
            className='w-full p-2 focus:outline-none rounded-md'
            type='text'
            {...register('name', requirements.name)}
          />
        </DataLabel>
        <DataLabel
          errorInfo={errors.surname}
          htmlFor='surname'
          labelText='Apellido'
        >
          <input
            placeholder='Fernandez'
            className='w-full p-2 focus:outline-none rounded-md'
            type='text'
            {...register('surname', requirements.surname)}
          />
        </DataLabel>
        <DataLabel
          errorInfo={errors.email}
          htmlFor='email'
          labelText='Correo Electrónico'
        >
          <input
            placeholder='plabloelias@example.com'
            className='w-full p-2 focus:outline-none rounded-md'
            type='text'
            {...register('email', requirements.email)}
          />
        </DataLabel>
        <DataLabel
          errorInfo={errors.password}
          htmlFor='password'
          labelText='Contraseña'
        >
          <input
            placeholder='123456'
            className='w-full p-2 focus:outline-none rounded-md'
            type='text'
            {...register('password', requirements.password)}
          />
        </DataLabel>
      </FormLayout>
      <ToastContainer />
    </div>
  )
}
