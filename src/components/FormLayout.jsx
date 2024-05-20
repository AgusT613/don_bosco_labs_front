import { ActionBtn } from './ActionBtn'

export const FormLayout = ({ children, onSubmit, buttonActionLabel }) => {
  return (
    <section className='flex flex-col bg-slate-200 w-4/5 p-4 rounded-lg justify-between'>
      <form
        onSubmit={onSubmit}
        className='grid grid-cols-2 gap-4 pt-4'
      >
        {children}
        <ActionBtn>{buttonActionLabel}</ActionBtn>
      </form>
    </section>
  )
}
