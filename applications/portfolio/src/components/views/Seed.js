import React from 'react';
import seedData from '../../data/seed.data';

const Seed = () => {
  return ( 
    <React.Fragment>
      <h2>seed data</h2>
      <button type='button' onClick={() => {
        seedData();
      }}>click to seed</button>
    </React.Fragment>
     
   );
}
 
export default Seed;