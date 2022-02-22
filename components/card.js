class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="item-wrapper">
        <a href=${this.getAttribute('url')}>
          <div class="item-img">
            <img src=${this.getAttribute('thumbnail')} alt="" title=${this.getAttribute('title')}>
          </div>
          <div class="item-content mb-4">
            <h5 class="item-title mbr-fonts-style display-5">
              <a class="text-primary" href=${this.getAttribute('url')}>
                ${this.getAttribute('title')}
              </a>
            </h5>
            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7 d-flex justify-content-between">
              <strong>
                ${this.getAttribute('creator')}
              </strong>
              <em>
                ${this.getAttribute('date')}
              </em>
            </h6>
            <p class="mbr-text mbr-fonts-style mt-3 display-7">
              ${this.getAttribute('description')}
            </p>
          </div>
        </a>
        <!-- <div class="mbr-section-btn item-footer mt-1 d-flex justify-content-center">
          <a href="" class="btn item-btn btn-primary display-7" target="_blank">
            Read More &gt;
          </a>
        </div> -->
      </div>
    `;
  }
}

customElements.define('card-component', Card);
