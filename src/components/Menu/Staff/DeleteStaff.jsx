import { useNavigate, useParams } from 'react-router-dom'
import { HeaderGoBack } from '../../HeaderGoBack'
import { useEffect, useState } from 'react'
import { getUserDataById } from '../../../services/getUserDataById'
import { FormLayout } from '../../FormLayout'
import { useForm } from 'react-hook-form'
import { DataLabel } from '../../DataLabel'
import { apiUserManage } from '../../../services/apiUserManage'
import { WarningDelete } from '../../WarningDelete'
import { API_STAFF } from '../../../services/dotenv.config'

export const DeleteStaff = () => {
  const [displayWarning, setDisplayWarning] = useState(false)
  const navigate = useNavigate()
  const { userId } = useParams()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    getUserDataById(userId)
      .then(data => {
        const { name, surname, email } = data
        setValue('name', name)
        setValue('surname', surname)
        setValue('email', email)
      })
  }, [])

  const handleCancel = () => {
    setDisplayWarning(false)
  }

  const handleDelete = () => {
    apiUserManage({
      apiUrl: API_STAFF + `/${userId}`,
      method: 'DELETE'
    })
    navigate('/menu/')
  }

  const onSubmit = () => {
    setDisplayWarning(true)
  }

  return (
    <div className='grid grid-rows-[auto,1fr] justify-items-center relative'>
      <WarningDelete
        displayWarning={displayWarning}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
      <HeaderGoBack pageSectionLabel='Eliminar Personal' />
      <FormLayout
        onSubmit={handleSubmit(onSubmit)}
        buttonActionLabel='Eliminar'
      >
        <DataLabel
          labelText='Nombre'
          htmlFor='name'
          className='col-span-2'
        >
          <input
            type='text'
            readOnly
            className='w-full p-2 focus:outline-none rounded-md'
            {...register('name')}
          />
        </DataLabel>
        <DataLabel
          labelText='Apellido'
          htmlFor='surname'
          className='col-span-2'
        >
          <input
            type='text'
            readOnly
            className='w-full p-2 focus:outline-none rounded-md'
            {...register('surname')}
          />
        </DataLabel>
        <DataLabel
          labelText='Correo Electrónico'
          htmlFor='email'
          className='col-span-2'
        >
          <input
            type='email'
            readOnly
            className='w-full p-2 focus:outline-none rounded-md'
            {...register('email')}
          />
        </DataLabel>
      </FormLayout>
    </div>
  )
}
