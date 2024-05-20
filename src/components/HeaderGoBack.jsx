import { LabsLogo } from './LabsLogo'
import { LinkLabPage } from './LinkLabPage'

export const HeaderGoBack = ({ pageSectionLabel }) => {
  return (
    <header className='h-20 bg-slate-100 w-full flex items-center justify-between shadow-lg p-4 small-mobile:flex-col small-mobile:h-[max-content] small-mobile:gap-4'>
      <LabsLogo>{pageSectionLabel}</LabsLogo>
      <nav>
        <LinkLabPage to={-1}>
          <div className='text-slate-500 big-mobile:text-2xl top-mobile:text-2xl tablet:text-3xl'>
            Volver
          </div>
        </LinkLabPage>
      </nav>
    </header>
  )
}
