import { useForm } from 'react-hook-form'
import { requirements } from '../../../services/fieldValidate'
import { apiUserManage } from '../../../services/apiUserManage'
import { HeaderGoBack } from '../../HeaderGoBack'
import { FormLayout } from '../../FormLayout'
import { DataLabel } from '../../DataLabel'
import { ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserDataById } from '../../../services/getUserDataById'
import { API_STAFF } from '../../../services/dotenv.config'

export const UpdateStaff = () => {
  const { userId } = useParams()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  useEffect(() => {
    getUserDataById(userId)
      .then(data => {
        const { name, surname, email, password } = data
        setValue('name', name)
        setValue('surname', surname)
        setValue('email', email)
        setValue('password', password)
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  const onSubmit = data => {
    apiUserManage({
      method: 'PUT',
      apiUrl: API_STAFF + `/${userId}`,
      dataModel: data,
      msgInCaseOfSuccess: 'El dato se actualizó correctamente'
    })
  }

  return (
    <div className='grid justify-items-center min-h-screen'>
      <HeaderGoBack pageSectionLabel='Editar Personal' />
      <FormLayout
        onSubmit={handleSubmit(onSubmit)}
        buttonActionLabel='Actualizar'
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
          className='col-span-2'
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
