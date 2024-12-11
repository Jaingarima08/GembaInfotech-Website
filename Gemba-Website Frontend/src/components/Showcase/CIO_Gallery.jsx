import React from 'react';
import img1 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.00.jpeg';
import img2 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.01.jpeg';
import img3 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.02 (1).jpeg';
import img4 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.02 (2).jpeg';
import img5 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.02.jpeg';
import img6 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.05.jpeg';
import img8 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.07 (1).jpeg';
import img9 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.07.jpeg';
import img10 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.08.jpeg';
import img11 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.53.jpeg';
import img12 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.55.jpeg';
import img13 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.56.jpeg';
import img14 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.57.jpeg';
import img15 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.04.jpeg';
import img16 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.04.jpeg';
import img17 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.06.jpeg';
import img18 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.09.jpeg';
import img19 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.01 (1).jpeg';


const images = [
    { id: 8, src: img8, title: 'Image 8' },
    { id: 9, src: img9, title: 'Image 9' },
    { id: 10, src: img10, title: 'Image 10' },
    { id: 11, src: img11, title: 'Image 11' },
    { id: 12, src: img12, title: 'Image 12' },
    { id: 13, src: img13, title: 'Image 13' },
    { id: 14, src: img14, title: 'Image 14' },
    { id: 18, src: img18, title: 'Image 18'},
    { id: 1, src: img1, title: 'Image 15' },
    { id: 15, src: img15, title: 'Image 1' },
    { id: 16, src: img16, title: 'Image 16' },
    { id: 17, src: img17, title: 'Image 17' },
    { id: 2, src: img2, title: 'Image 2' },
    { id: 3, src: img3, title: 'Image 3' },
    { id: 4, src: img4, title: 'Image 4' },
    { id: 5, src: img5, title: 'Image 5' },
    { id: 6, src: img6, title: 'Image 6' },
    { id: 19, src: img19, title: 'Image 19' },
   
  ];
const Picture = () => {
  return (
    <div className=' items-center justify-center text-center bg-gradient-to-r from-gray-300 to-gray-200 mt-8 pt-32 pb-24'>
    <h1 className='text-gray-700 text-center font-bold text-2xl sm:text-3xl lg:text-4xl hover:underline pt-2'>CIO Gallery</h1>
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
  )
}

export default Picture