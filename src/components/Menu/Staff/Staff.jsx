import { useNavigate } from 'react-router-dom'
import { useDataList } from '../../../hooks/useDataList'
import { API_STAFF } from '../../../services/dotenv.config'
import { BodyDataCell, BodyRow, HeadDataCell, HeadRow, Table } from '../../Table'
import { EditIcon } from '../../EditUser'
import { DeleteIcon } from '../../DeleteUser'

export const Staff = () => {
  const { userList } = useDataList(API_STAFF)
  const navigate = useNavigate()

  const createNewStaff = ()=> navigate("/new-staff")
  const editStaff = (userId) => navigate(`/update-staff/${userId}`)
  const deleteStaff = (userId) => navigate(`/delete-staff/${userId}`)

  return (
    <>
      <div className='flex items-center justify-center my-4'>
        <button 
          onClick={createNewStaff} 
          className='bg-slate-400 p-2 rounded hover:bg-slate-300'
        >Crear Nuevo Personal</button>
      </div>
      <Table>
        <HeadRow>
          <HeadDataCell>Nombre</HeadDataCell>
          <HeadDataCell>Apellido</HeadDataCell>
          <HeadDataCell>Email</HeadDataCell>
          <HeadDataCell>Editar</HeadDataCell>
          <HeadDataCell>Eliminar</HeadDataCell>
        </HeadRow>
        <tbody>
          {userList.map((user, index) => (
            <BodyRow key={index} index={index}>
              <BodyDataCell>{user.name}</BodyDataCell>
              <BodyDataCell>{user.surname}</BodyDataCell>
              <BodyDataCell>{user.email}</BodyDataCell>
              <EditIcon handleEditUser={() => editStaff(user.user_id)}/>
              <DeleteIcon handleDeleteUser={() => deleteStaff(user.user_id)}/>
            </BodyRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}
