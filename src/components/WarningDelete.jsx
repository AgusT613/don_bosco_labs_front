import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs'

export const WarningDelete = ({ handleDelete, handleCancel, displayWarning }) => {
  return (
    <div className={`bg-[rgba(0,0,0,0.75)] w-full h-screen absolute text-white flex flex-col justify-center items-center ${displayWarning ? '' : 'hidden'}`}>
      <article className='flex flex-col h-[200px] justify-around'>
        <h4 className='font-semibold text-3xl text-yellow-500 uppercase text-center'>Advertencia</h4>
        <p className='text-lg'>Esta acción es irreversible, aún así desea continuar? </p>
        <div className='flex items-center justify-center gap-10'>
          <BsFillCheckCircleFill
            className='cursor-pointer text-4xl text-green-600'
            onClick={handleDelete}
          >SI
          </BsFillCheckCircleFill>
          <BsXCircleFill
            className='cursor-pointer text-4xl text-red-600'
            onClick={handleCancel}
          >NO
          </BsXCircleFill>
        </div>
      </article>
    </div>
  )
}
