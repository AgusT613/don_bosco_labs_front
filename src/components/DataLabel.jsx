export const DataLabel = ({ children, htmlFor, labelText, errorInfo, className }) => {
  const dataLabelStyle = 'flex flex-col gap-2'
  return (
    <div className={`${dataLabelStyle} ${className}`}>
      <label htmlFor={htmlFor} className='big-mobile:text-xl'>{labelText}</label>
      {children}
      <p className='text-xs text-red-600 font-medium'>{errorInfo?.message}</p>
    </div>
  )
}
