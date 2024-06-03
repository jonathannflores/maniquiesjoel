import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/244250641_312181997391962_726458999483658482_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFW_hWX-f0M8tHoFUYzRPl_r0p0EM8pj3ivSnQQzymPePy9NPKQe35mdzFoz7EF-pkaouMQRG1Y5lw-HTb-PpBo&_nc_ohc=KUzfH4n1wPYQ7kNvgEiscEj&_nc_ht=scontent.feze12-1.fna&oh=00_AYADgGfn3o5IFNAxSY8KnY8hhZm5_lK5Wp-FbvDSGCS_9Q&oe=6662ECB9',
  'https://i.imgur.com/jXfWI28.jpeg',
  'https://i.imgur.com/opFEDdB.jpeg',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`slide ${currentImageIndex}`}
        className={`image ${isFading ? 'fade' : ''}`}
      />
    </div>
  );
};

export default ImageSlider;