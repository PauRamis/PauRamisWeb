import React from 'react';
import { useTranslation } from 'react-i18next';

function Contactes() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '1rem' }}>
      <h1>{t('contactes')}</h1>
      <section class="center">
      <article>
        <h2>Adreça</h2>
        <address>c/Batle Josep Canyelles, 5, 07320</address>
        <address>Santa Maria del Camí (Illes Balears)</address>
      </article>
      <article>
        <h2>Telèfon</h2>
        <a class="normal" href="tel:+34601358482">+34 601 358 482</a>
      </article>
      <article>
        <h2>Email</h2>
        <a class="normal" href="mailto:pauramisnunez@gmail.com">pauramisnunez@gmail.com</a>
        <p></p>
      </article>
    </section>
    </main>
  );
}

export default Contactes;
