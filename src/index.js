import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heading from './Heading/Heading';
import Nevbar from './Nevbar/Nevbar';
import{HashRouter,Route,Routes} from 'react-router-dom';
import Option from './option/Option';
import QrCode from './QRcode/QrCode';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
   
//     <App />
   
   
//   </React.StrictMode>
// ,root);
ReactDOM.render(
<HashRouter>
<Routes>
    <Route exact path='/' element={<App/>}/>
    <Route path='/qr' element={<><Nevbar/> <Heading/><Option/><QrCode/></>}/>
</Routes>
</HashRouter>

,document.getElementById('root'));
///hello
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

