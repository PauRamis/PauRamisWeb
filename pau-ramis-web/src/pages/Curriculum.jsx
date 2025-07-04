import React from 'react';
import { useTranslation } from 'react-i18next';

function Curriculum() {
  const { t } = useTranslation();

  return (
    <main>
		<h1>El meu curriculum</h1>
		<article>
			<h2>Dades Acadèmiques <span class="material-symbols-outlined">
					school</span></h2>
			<p><b>2014-2018</b> Educació Secundària Obligatòria. Centre d’estudis - IES SANTA MARIA</p>
			<p><b>2019-2021</b> Grau Mitjà de Tècnic en Sistemes microinformàtics i xarxes. Centre d’estudis - ES LICEU</p>
			<p><b>2021-2024</b> Grau Superior de Tècnic en Desenvolupament d'aplicacions Web. Centre d’estudis - ES LICEU</p>
		</article>
		<article>
			<h2>Experiència Professional <span class="material-symbols-outlined">
					construction
				</span></h2>
			<h3>2021 - Centre Internacional d’Educació (C.I.D.E.)</h3>
			<p>Funcions en pràctiques realitzades en el centre d'estudis C.I.D.E com a Tècnic Microinformàtic:</p>
			<ul>
				<li>Recepció, gestió, distribució i resolució d'incidències (redmine.nigul.coop).</li>
				<li>Resolució d'incidències tècniques de Windows 7, 8, 10 i d’Ubuntu 12, 16, 18.</li>
				<li>Configuració de navegadors, impressores, Windows, preses de xarxa.</li>
				<li>Muntatge d'equips informàtics i gestió d'inventari d'aquest.</li>
				<li>Muntatge i administració de serveis audiovisuals en esdeveniments importants de l'escola (graduacions)</li>
			</ul>
		</article>
		<article>
			<h2>Idiomes <span class="material-symbols-outlined">
					language
				</span></h2>
			<p>CASTELLÀ: parlat i escrit (B1)</p>
			<p>CATALÀ: parlat i escrit (B1)</p>
			<p>ANGLÈS: parlat i escrit (B2)</p>
		</article>
	</main>
  );
}

export default Curriculum;
