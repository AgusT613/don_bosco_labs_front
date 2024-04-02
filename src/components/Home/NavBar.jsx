import { LinkLabSection } from '../LinkLabSection'
import { LabsLogo } from '../LabsLogo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

export const NavBar = () => {
  const [hamburguerMenu, setHamburguerMenu] = useState(false)

  const toggleNavMenu = () => {
    setHamburguerMenu(!hamburguerMenu)
  }

  return (
    <header className='bg-slate-100 fixed z-50 w-full h-20 flex items-center justify-center shadow-lg small-mobile:h-16'>
      <nav className='flex items-center justify-center small-mobile:hidden large-mobile:hidden big-mobile:hidden top-mobile:hidden'>
        <ul className='flex gap-8 justify-center items-center'>
          <LabsLogo href='#home'>Inicio</LabsLogo>
          <LinkLabSection href='#about'>Nosotros</LinkLabSection>
          <LinkLabSection href='#timeline'>Análisis</LinkLabSection>
          <LinkLabSection href='#booking'>Solicitar</LinkLabSection>
          <LinkLabSection href='#contact'>Detalles</LinkLabSection>
        </ul>
      </nav>
      <nav className='bigger-devices:hidden flex items-center justify-around w-full h-full'>
        <LabsLogo href='#home'>Inicio</LabsLogo>
        {hamburguerMenu
          ? <AiOutlineClose className='text-2xl large-mobile:text-3xl big-mobile:text-4xl top-mobile:text-5xl' onClick={toggleNavMenu} />
          : <GiHamburgerMenu className='text-2xl large-mobile:text-3xl big-mobile:text-4xl top-mobile:text-5xl' onClick={toggleNavMenu} />}
        <ul className={`${hamburguerMenu ? 'flex' : 'hidden'} fixed top-16 w-full h-[calc(100%-4em)] bg-[rgba(0,0,0,0.6)] flex-col justify-center items-center gap-4 large-mobile:top-20 large-mobile:gap-8 big-mobile:top-20 big-mobile:gap-12 top-mobile:top-20 top-mobile:gap-16`}>
          <LinkLabSection href='#about'>Nosotros</LinkLabSection>
          <LinkLabSection href='#timeline'>Análisis</LinkLabSection>
          <LinkLabSection href='#booking'>Solicitar</LinkLabSection>
          <LinkLabSection href='#contact'>Detalles</LinkLabSection>
        </ul>
      </nav>
    </header>
  )
}
