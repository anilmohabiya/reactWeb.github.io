import React from 'react';
import web from '../src/image/undertaker.jpg';
import Common from './Common';

const Home =()=>{

   
    return(
        <>
     <Common 
           name='welcome to the React website with'
           imgsrc={web}
           visit="/service"
           btname="Get started"
          />
    
        </>

        
    );
};
export default Home;