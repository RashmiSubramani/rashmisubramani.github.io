import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Add scrolling class when user starts scrolling
      document.body.classList.add('scrolling');
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Remove scrolling class after user stops scrolling for 1 second
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      document.body.classList.remove('scrolling');
    };
  }, []);

  return null; // This component doesn't render anything
}