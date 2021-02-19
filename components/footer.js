class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="footer4 cid-spn9gaEXc8 px-3 py-4" once="footers" id="footer4-1k">
        <div class="mx-5">
          <div class="row mbr-white">
            <div class="align-self-center">
              <img src="/assets/images/euflag.jpg" alt="euflag">
            </div>
            <div class="col-12 col-md-6 col-lg-7">
              <p class="mbr-text mbr-fonts-style mb-0"><strong>
                STIRData: Specifications and Tools for Interoperable and Reusable data</strong><br/>is co-financed by the Connecting Europe Facility Programme of the European Union,<br/>under GA n. INEA/CEF/ICT/A2019/2063078
              </p>
            </div>
              <!-- <div class="col-12 col-md-6 col-lg-3">
                  <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-7"></h5>
                  <ul class="list mbr-fonts-style display-4"></ul>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-7"></h5>
                  <ul class="list mbr-fonts-style display-4">
                      <li class="mbr-text item-wrap"><br></li>
                  </ul>
              </div> -->
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('footer-component', Footer);
