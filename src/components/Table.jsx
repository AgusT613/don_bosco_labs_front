export const Table = ({ children }) => {
  return (
    <div className='flex flex-col items-center'>
      <table className='w-11/12 bg-gray-300'>
        {children}
      </table>
    </div>
  )
}

export const HeadRow = ({ children }) => {
  return (
    <thead>
      <tr className='bg-slate-400'>
        {children}
      </tr>
    </thead>
  )
}

export const BodyRow = ({ children, index }) => {
  const rowColourByIndex = index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100'

  return (
    <tr className={`${rowColourByIndex}`}>
      {children}
    </tr>
  )
}

export const HeadDataCell = ({ children }) => {
  return <th className='p-3'>{children}</th>
}

export const BodyDataCell = ({ children }) => {
  return (
    <td className='p-2 text-center'>{children}</td>
  )
}
