import { FiEdit } from 'react-icons/fi'

export const EditIcon = ({ handleEditUser }) => {
  return (
    <td
      className='cursor-pointer transition-all duration-300 hover:bg-green-200'
      onClick={handleEditUser}
    >
      <FiEdit className='w-full text-lg text-green-700' />
    </td>
  )
}
