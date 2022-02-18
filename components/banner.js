class Banner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="header13 cid-spmkMo8M5j" id="header13-s">
        <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(255, 255, 255);"></div>
        <div class="align-center container">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-12">
              <div class="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>STIRData</strong>
              </div>
              <p class="mbr-text mbr-fonts-style mb-3 display-5">
                ${this.getAttribute('sub-title')}
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('banner-component', Banner);
