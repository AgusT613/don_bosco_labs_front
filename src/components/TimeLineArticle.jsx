import { RxTriangleRight } from 'react-icons/rx'

export const TimeLineArticle = ({ children, title, textDescription, timeLineReachEnd }) => {
  const line = 'after:content-[""] after:w-1 after:h-full after:bg-red-300 after:absolute after:top-0 after:right-[5rem] after:-z-20 small-mobile:after:hidden large-mobile:after:hidden big-mobile:after:hidden top-mobile:after:hidden'

  return (
    <div className='relative bigger-devices:pb-16 w-3/4 small-mobile:w-full small-mobile:pb-4 large-mobile:w-full large-mobile:pb-4 big-mobile:pb-4 big-mobile:w-10/12 top-mobile:w-full top-mobile:pb-4 tablet:w-10/12'>
      <article className='grid bigger-devices:grid-cols-[1fr,10rem] place-items-center gap-4'>
        <div className='bg-slate-200 relative shadow-2xl w-full'>
          <h3 className='text-3xl bg-black text-white font-medium p-5 small-mobile:text-xl small-mobile:text-center large-mobile:text-2xl'>{title}</h3>
          <p className='p-5 opacity-75'>{textDescription}</p>
          <RxTriangleRight className='absolute top-5 -right-6 w-10 h-10 small-mobile:hidden large-mobile:hidden big-mobile:hidden top-mobile:hidden' />
        </div>
        <div className={`bg-blue-300 text-5xl rounded-full p-4 place-self-start justify-self-center shadow-2xl ${timeLineReachEnd ? '' : line}`}>
          {children}
        </div>
      </article>
    </div>
  )
}
