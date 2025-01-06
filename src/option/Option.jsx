import React from 'react';
import {NavLink} from 'react-router-dom';
import './option.css';

export default function Option(){
    return(
        <>
        <div className='opt'>
        <NavLink to="/"><i id="home" class="fa-solid fa-link"><span> link</span></i></NavLink>
        <NavLink to="/qr"><i id='qr' class="fa-solid fa-qrcode"><span> QR </span></i></NavLink>
        </div>
        </>
    )
}