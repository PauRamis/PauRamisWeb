function Home() {

  return (
    <main style={{ padding: '1rem' }}>
      <aside style={{ float: 'right', width: '30%', marginLeft: '1rem' }}>
        <img
          src="/img/perfil.jpg"
          alt="Foto de perfil"
          style={{ maxWidth: '90%', borderRadius: '50%' }}
        />
      </aside>

      <section>
        <h1>Sobre mi</h1>
        <article>
          <p><strong>Em dic Pau Ramis Núñez</strong> i vaig néixer a Palma (Illes Balears) el 21 de setembre de 2002.</p>

          <p>Des de petit m’ha apassionat la tecnologia i entendre com funcionen els aparells electrònics. Aquesta curiositat em va conduir naturalment cap al món de la informàtica.</p>

          <p>Actualment soc <strong>tècnic superior en desenvolupament d’aplicacions web</strong>, formació que he cursat a <strong>Es Liceu</strong>, després d’obtenir també el <strong>grau mitjà en sistemes microinformàtics i xarxes</strong>. Durant aquest període, he adquirit coneixements sòlids en programació, bases de dades, disseny web i administració de sistemes.</p>

          <p>Sóc una persona metòdica, amb ganes constants d’aprendre i amb una gran passió per resoldre problemes tècnics de manera creativa. El meu objectiu és continuar creixent com a desenvolupador i aportar valor a projectes innovadors.</p>
        </article>
      </section>


    </main>
  );
}

export default Home;
