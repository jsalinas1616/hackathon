import { useState, useEffect } from 'react';

const useBackgroundPosition = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  useEffect(() => {
    const loginContainer = document.querySelector(".login-container") as HTMLElement | null;
    if (loginContainer) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight } = currentTarget as HTMLElement;
    
        const xPos = (clientX / clientWidth) * 100;
        const yPos = (clientY / clientHeight) * 100;
    
        setBackgroundPosition(`${xPos}% ${yPos}%`);
      };
    
      loginContainer.addEventListener("mousemove", handleMouseMove);
    
      return () => {
        loginContainer.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return backgroundPosition;
};

export default useBackgroundPosition;