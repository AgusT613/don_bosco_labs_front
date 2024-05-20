export const ActionBtn = ({ children }) => {
  return (
    <input type='submit' className='bg-slate-400 transition-all duration-200 p-2 w-32 mx-auto text-base rounded-lg hover:bg-slate-600 hover:text-white col-span-2 cursor-pointer big-mobile:text-xl big-mobile:w-40 big-mobile:p-4 top-mobile:text-3xl top-mobile:w-52 tablet:text-4xl tablet:w-60 tablet:p-3' value={children} />
  )
}
