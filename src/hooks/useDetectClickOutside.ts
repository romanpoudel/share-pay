import React, { useEffect } from 'react';

type props = {
  ref: React.RefObject<HTMLElement>;
  fn: () => void;
};

const useDetectClickOutside = ({ ref, fn }: props) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation();
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, fn]);
};

export default useDetectClickOutside;
