import { FaLinkedin } from 'react-icons/fa';

function Contactes() {
  return (
    <main>
      <h1>Per contactar amb mi:</h1>
      <section class="center">
        <article>
          <h2>Email</h2>
          <p>pauramisnunez@gmail.com</p>
        </article>
        <article>
          <h2>Linkedin</h2>
          <a
            href="https://www.linkedin.com/in/pau-ramis-073387369/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: '#0e76a8' }}
          >
            <FaLinkedin size={24} style={{ marginRight: '0.5rem' }} />
            Visita el meu perfil
          </a>
        </article>
      </section>
    </main>
  );
}

export default Contactes;
