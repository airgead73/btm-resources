import React from 'react';

const Main = ({ mainClass, children }) => {
  return ( 
    <main className={`main-${mainClass}`}>{children}</main>
   );
}
 
export default Main;