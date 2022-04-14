import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeToAbhishek, changeToShiv } from './redux/actionCreators/actionCreators';

export default function AnotherComponent() {
   const x = useSelector((state)=>{
       return state;
   });

   const dispatch = useDispatch();
  return (
      <>

        <div>AnotherComponent</div>
        {x.reducer2.name}
        {console.log('Another component ',x)}

        <button onClick={()=>{ dispatch(changeToShiv()) }}>Change Name1</button>
      
      </>
   
  )
}
