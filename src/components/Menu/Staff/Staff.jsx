import { useDataList } from '../../../hooks/useDataList'
import { API_STAFF } from '../../../services/dotenv.config'
import { BodyDataCell, BodyRow, HeadDataCell, HeadRow, Table } from '../../Table'

export const Staff = () => {
  const { userList } = useDataList(API_STAFF)

  return (
    <>
      <Table>
        <HeadRow>
          <HeadDataCell>Nombre</HeadDataCell>
          <HeadDataCell>Apellido</HeadDataCell>
          <HeadDataCell>Email</HeadDataCell>
        </HeadRow>
        <tbody>
          {userList.map((user, index) => (
            <BodyRow key={index} index={index}>
              <BodyDataCell>{user.nombres}</BodyDataCell>
              <BodyDataCell>{user.apellidos}</BodyDataCell>
              <BodyDataCell>{user.email}</BodyDataCell>
            </BodyRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}
