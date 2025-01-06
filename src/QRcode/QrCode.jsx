import { useState } from 'react'
import './QrCode.css'
export default function QrCode(){
   
    const[show,setShow]=useState(false);
    const[inp,setInp]=useState("");
function genrateQR(e){
       setInp(e.target.value);
        setShow(false);
    }
    function getData(){
        setShow(true);
    }

    return(
        <>
        <div className='whole'>
         <div className='qrCenter'>
            <div>
 <input id='inp' type="text" placeholder='Paste your link'onChange={genrateQR}/>
 <button id='btn2' onClick={getData}>Make QR</button>
 </div>


 </div>
 <div className='qrData'>
    
        {
show?<div className='div'> <img id='img' src={`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${inp}`}/></div>:""
 }
 

 </div>
 </div>
        </>
    )
}