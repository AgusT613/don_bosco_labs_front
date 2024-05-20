import { useNavigate } from 'react-router-dom'
import { useDataList } from '../../../hooks/useDataList'
import { API_STAFF } from '../../../services/dotenv.config'
import { BodyDataCell, BodyRow, HeadDataCell, HeadRow, Table } from '../../Table'

export const Staff = () => {
  const { userList } = useDataList(API_STAFF)
  const navigate = useNavigate()

  const createNewStaff = ()=> navigate("/new-staff")

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
        </HeadRow>
        <tbody>
          {userList.map((user, index) => (
            <BodyRow key={index} index={index}>
              <BodyDataCell>{user.name}</BodyDataCell>
              <BodyDataCell>{user.surname}</BodyDataCell>
              <BodyDataCell>{user.email}</BodyDataCell>
            </BodyRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}
