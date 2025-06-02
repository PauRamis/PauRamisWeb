class NavBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <ul class="navbar">
        <li><a class="link" href="index.html">Inici</a></li>
        <li><a class="link" href="curriculum.html">Curriculum</a></li>
        <li><a class="link" href="contactes.html">Contactes</a></li>
      </ul>
    `;
	}
}
customElements.define("nav-bar", NavBar);
