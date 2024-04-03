import { Link } from 'react-router-dom'

export const LinkLabPage = ({ children, to }) => {
  return (
    <li className='list-none transition-all duration-200 text-slate-500 hover:text-blue-600 small-mobile:text-slate-200 large-mobile:text-slate-200 big-mobile:text-slate-200 top-mobile:text-slate-200 bg-slate-200 p-2 rounded hover:bg-slate-100 hover:cursor-pointer'>
      <Link to={to} className='font-semibold text-lg small-mobile:text-xl large-mobile:text-2xl big-mobile:text-4xl top-mobile:text-5xl'>{children}</Link>
    </li>
  )
}
