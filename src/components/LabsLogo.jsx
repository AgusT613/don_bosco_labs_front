export const LabsLogo = ({ children, href }) => {
  return (
    <li className='list-none'>
      <a
        href={href}
        className='flex flex-col items-center text-blue-600 font-bold text-2xl hover:text-blue-500'
      >
        <h1 className='small-mobile:text-xl'>Don Bosco Labs</h1>
        <strong className='text-gray-600 font-semibold text-sm small-mobile:text-xs tablet:text-sm'>Análisis Clínicos - {children}</strong>
      </a>
    </li>
  )
}
