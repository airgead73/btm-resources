import React from 'react';

const Container = ({ containerClass, children }) => {
  return ( 
    <div className={`container-${containerClass}`}>{children}</div>
   );
}
 
export default Container;