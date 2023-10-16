import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <footer id="sticky-footer" className="py-4  text-white-50" style={{  backgroundColor:'#e11d48' ,position: 'fixed', bottom: 0, width: '100%' }}>
      <div  className="container text-center">
        <small style={{color:'white'}}>Designed By ❤ </small><a target='blank' href='https://parvezkhan.vercel.app/' style={{fontSize: '16px', fontWeight:'bold', color:'white', textDecoration:'none'}}>Parvez Khan</a>

      </div>
    </footer>
  );
};

export default Footer;
