import { useEffect } from 'react';

export default function usePreventScroll(active: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);
}
