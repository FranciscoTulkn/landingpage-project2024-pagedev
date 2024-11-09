import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
  
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }    
    };

    // Generate event scroll
    window.addEventListener("scroll", updateScrollCompletion);


    // Remove event scroll
    return () => window.removeEventListener("scroll", updateScrollCompletion);
    
  }, []);

  return completion;
}

export default useScrollProgress;