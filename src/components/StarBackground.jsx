import React, { useState } from 'react'

//id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
    };

    const newStars = [];

    for(let i =0; i < numberOfStars; I++){
        newStars.push({
            id:i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
        })

    };

  return (
    <div>StarBackground

    </div>
  )
}
