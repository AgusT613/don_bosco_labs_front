export const About = () => {
  return (
    <section id='about' className='flex items-center small-mobile:flex-col large-mobile:flex-col large-mobile:gap-8 big-mobile:flex-col top-mobile:flex-col top-mobile:gap-12 tablet:flex-col tablet:gap-10'>
      <div className='flex flex-col flex-1 small-mobile:p-4'>
        <h2 className='text-4xl font-bold mb-10 small-mobile:text-2xl small-mobile:text-center large-mobile:text-3xl large-mobile:text-center big-mobile:text-center'>Director Médico: Dr. Carson</h2>
        <p className='text-xl opacity-75 mr-12 font-thin small-mobile:text-base small-mobile:place-items-center small-mobile:m-0 large-mobile:text-lg large-mobile:m-5 big-mobile:m-5'>No olvides Vacunarte y protégerte a ti mismo y a los demás lavándote las manos con frecuencia. El exterior es más seguro que el interior para reuniones o celebración de eventos. Las personas que enferman con Gripe o  coronavirus (COVID-19) experimentarán síntomas leves a moderados y se recuperarán sin tratamientos especiales.</p>
      </div>
      <div className='w-[25rem] h-[25rem] shadow-2xl mx-8 rounded-full small-mobile:m-0 small-mobile:w-[15rem] small-mobile:h-[15rem] large-mobile:w-[16rem] large-mobile:h-[16rem]'>
        <p className='bg-slate-200 h-full flex flex-col items-center justify-center rounded-full text-2xl small-mobile:text-lg large-mobile:text-lg big-mobile:text-2xl'>
          <span className='text-blue-600 font-bold text-9xl small-mobile:text-8xl large-mobile:text-7xl'>+12</span> Años de Experiencia
        </p>
      </div>
    </section>
  )
}
