import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h3>Agende uma Visita</h3>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
