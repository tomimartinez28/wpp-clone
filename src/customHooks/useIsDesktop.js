import React, { useState, useEffect } from 'react'

function useIsDesktop() {
  // Detecta el estado inicial según el ancho de la ventana
  const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
  const [isDesktop, setIsDesktop] = useState(desktopMediaQuery.matches);

  useEffect(() => {
    // Actualiza el estado cuando cambia el tamaño de la pantalla
    const handleMediaChange = (event) => {
      setIsDesktop(event.matches);
    };

    desktopMediaQuery.addEventListener('change', handleMediaChange);

    // Limpia el listener al desmontar
    return () => {
      desktopMediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [desktopMediaQuery]);

  return isDesktop;
}


export default useIsDesktop
