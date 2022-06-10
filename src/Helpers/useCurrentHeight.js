import { useState, useEffect } from 'react';

const getHeight = () => window.innerHeight
  || document.documentElement.clientHeight 
  || document.body.clientHeight;

function useCurrentHeight() {
  // save current window Height in the state object
  let [weight, setHeight] = useState(getHeight());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change Height from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setHeight(getHeight()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return weight;
}

export default useCurrentHeight;