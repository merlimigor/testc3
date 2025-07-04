import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} WaveCast Saquarema - Todos os direitos reservados.
    </footer>
  );
}

export default Footer;
