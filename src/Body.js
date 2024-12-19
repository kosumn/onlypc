import './main.css'
import React from 'react'
import Mainbanner from './Mainbanner';
import Bestitems from './Bestitems';

function Body() {
  return (
    <>
        <div className='body'>
            <Mainbanner/>
            <Bestitems/>
        
            
        </div>
    </>
  );
}

export default Body;
