export default class PageCollaps {
  constructor(parentEl) {
    if (!parentEl) {
      throw Error('Элемент не найден');
    }
    this.parentEl = parentEl;
    this.page = document.createElement('div');
  }

  init() {
    this.page.classList.add('collapse');
    this.page.innerHTML = '<div class="collapse-container">\n'
      + '                      <div class="collapse-header">\n'
      + '                        <div class="btn-box">\n'
      + '                          <button class="collapse-btn">Collapse</button>\n'
      + '                        </div>\n'
      + '                        <div class="header-container hidden">\n'
      + '                          <div class="header-content">\n'
      + '                            <p class="header-title"></p>\n'
      + '                          </div>\n'
      + '                        </div>\n'
      + '                      </div>\n'
      + '                      <div class="collapse-content">\n'
      + '                        <p class="content-title">Copy</p>\n'
      + '                      </div>\n'
      + '                    </div>\n';

    this.parentEl.prepend(this.page);
    const headerTitle = document.querySelector('.header-title');
    headerTitle.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit provident tenetur unde, architecto, dolorem itaque reiciendis eos porro obcaecati facilis omnis rem aperiam? Et fugit eveniet, alias iusto voluptatem iste tempore nam laudantium laboriosam maxime excepturi, ullam numquam voluptate dolores minima non, exercitationem placeat saepe. Totam quod aliquam beatae?';
    this.collapseBtn = this.parentEl.querySelector('.collapse-btn');
    this.headerContainer = this.parentEl.querySelector('.header-container');
  }
}
