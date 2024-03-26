import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
    {
      url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
      title: 'Lobster',
    },
    {
      url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Sushi',
    },
    {
      url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Pasta',
    },
    {
      url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Salmon',
    },
  ];
    

const Slider = () => {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex( newIndex )
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = ( slideIndex ) => {
    setCurrentIndex( slideIndex )
  }

  return (
      <div className='ma-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative'>
          <div className='w-full h-full rounded-xl bg-cover duration-500' style={{ backgroundImage: `url(${ slides[currentIndex].url })`}}></div>
          <span className='absolute duration-300 top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 left-5'><BsChevronCompactLeft size={30} onClick={nextSlide} /></span>
          <span className='absolute duration-300 top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 right-5'><BsChevronCompactRight size={30} onClick={prevSlide} /></span>

          <div className='flex top-4 justify-center py-2'>
            { slides.map( (e, i) => 
              <span key={ i } onClick={() => goToSlide( i )} className='text-2xl cursor-pointer'><RxDotFilled/></span>
            )}
          </div>
      </div>
  );
}
 
export default Slider;