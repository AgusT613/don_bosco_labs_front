import { Outlet } from 'react-router-dom'
import { LinkLabPage } from './LinkLabPage'
import { LabsLogo } from './LabsLogo'

export const MainMenu = () => {
  return (
    <div className='grid grid-rows-[80px,1fr]'>
      <header className='bg-slate-100 fixed z-50 w-full h-20 flex items-center justify-center shadow-lg'>
        <nav className='flex w-full justify-around items-center'>
          <LabsLogo href='#top'>Menu</LabsLogo>
          <LinkLabPage to='/menu/staff'>Personal</LinkLabPage>
        </nav>
      </header>
      <main className='row-start-2'>
        <Outlet />
      </main>
    </div>
  )
}
