import galleryImage1 from '../../assets/gallery/medium-shot-man-getting-vaccine.jpg'
import galleryImage2 from '../../assets/gallery/female-doctor-with-presenting-hand-gesture.jpg'

export const Galery = () => {
  return (
    <section className='bigger-devices:grid bigger-devices:grid-cols-2 small-mobile:grid-cols-1'>
      <figure>
        <img
          src={galleryImage1}
          alt='get a vaccine'
          title='get a vaccine for yourself'
        />
      </figure>
      <figure>
        <img
          src={galleryImage2}
          alt='wear a mask'
          title='wear a mask to protect yourself'
        />
      </figure>
    </section>
  )
}
