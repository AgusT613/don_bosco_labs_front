import { BsTrash } from 'react-icons/bs'

export const DeleteIcon = ({ handleDeleteUser }) => {
  return (
    <td
      className='cursor-pointer transition-all duration-300 hover:bg-red-200'
      onClick={handleDeleteUser}
    >
      <BsTrash className='w-full text-lg text-red-700' />
    </td>
  )
}
