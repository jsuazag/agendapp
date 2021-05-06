import {useState, useEffect} from 'react';
import {SCREEN_VIEWPORT} from './../constants/ViewPort';

export const useScreenViewPort = () => {
  const [screenViewPort, setScreenViewPort] = useState(null);

  useEffect(() => {
    const handlerResize = () => {
      const isDesktop = window.innerWidth > 768;
      setScreenViewPort(
        isDesktop ? SCREEN_VIEWPORT.DESKTOP : SCREEN_VIEWPORT.MOBILE
      );
    };
    handlerResize();
    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  return {
      screenViewPort
  };
};
