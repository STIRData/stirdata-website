class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="menu menu3 cid-snAyHVO3GM" once="menu" id="menu3-b">
        <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div class="container-fluid">
            <div class="navbar-brand">
              <span class="navbar-logo">
                <a href="/">
                  <img src="/assets/images/platform_logo.png" alt="stirdata_logo" style="height: 2.8rem;">
                </a>
              </span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/about">About</a></li>
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/partners">Partners</a></li>
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/ecg">ECG</a></li>
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/objectives">Objectives</a></li>
                <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/news">News</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    `;
  }
}

customElements.define('navbar-component', Navbar);
