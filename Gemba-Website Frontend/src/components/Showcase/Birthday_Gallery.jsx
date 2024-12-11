import React from 'react'
import img2 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.03.jpeg';
import img3 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.06 (1).jpeg';
import img4 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.06 (2).jpeg';


const images = [
    // { id: 1, src: img1, title: 'Image 8' },
    { id: 2, src: img2, title: 'Image 9' },
    { id: 3, src: img3, title: 'Image 10' },
    { id: 4, src: img4, title: 'Image 11' },
];

const Reunion_Gallery = () => {
  return (
    <div className='items-center justify-center text-center bg-gradient-to-r from-gray-300 to-gray-200 mt-8 pt-32 pb-24'>
      <h1 className='text-center font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl hover:underline pt-2'>Birthday Gallery</h1>
      <div className="columns-2 sm:columns-2 lg:columns-3 gap-1 my-14 mx-6 lg:mx-20">
   {images.map((image) => (
     <div key={image.id} className="overflow-hidden">
       <img
         src={image.src}
         alt={image.title}
         className="object-cover w-full h-full shadow-lg mb-1"
       />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reunion_Gallery