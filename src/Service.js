import React from 'react';
import B from '../src/image/anil1.jpg';


import Common from './Common';

const Service =()=>{

   
    return(
        <>
          <Common 
           name='welcome to the Service Page'
           imgsrc={B}
           visit="/contact"
           btname="contact now"
          />
    
        </>

        
    );
};
export default Service;