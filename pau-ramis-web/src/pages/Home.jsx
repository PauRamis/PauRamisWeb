import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '1rem' }}>
      <h1>{t('title')}</h1>
      <aside style={{ float: 'right', width: '30%', marginLeft: '1rem' }}>
        <img
          src="/img/perfil.jpg"
          alt="Foto de perfil"
          style={{ maxWidth: '90%', borderRadius: '50%' }}
        />
      </aside>

      <article>
        <h2>{t('personalLife')}</h2>
        <p>{t('personalText')}</p>
      </article>

      <article>
        <h2>{t('professionalLife')}</h2>
        <p>{t('professionalText')}</p>
      </article>
    </main>
  );
}

export default Home;
