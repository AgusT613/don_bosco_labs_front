export const LinkLabSection = ({ children, href }) => {
  return (
    <li className='list-none transition-all duration-200 text-slate-500 hover:text-blue-600 small-mobile:text-slate-200 large-mobile:text-slate-200 big-mobile:text-slate-200 top-mobile:text-slate-200'>
      <a href={href} className='font-semibold text-lg small-mobile:text-xl large-mobile:text-2xl big-mobile:text-4xl top-mobile:text-5xl'>
        {children}
      </a>
    </li>
  )
}
