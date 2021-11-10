import PageCollapse from './PageCollapse';
import PageChat from './PageChat';
import Animate from './Animate';

export default class PageController {
  constructor() {
    this.container = null;
    this.doubleСlick = true;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Контейнер не является элементом "HTMLElement"');
    }
    this.container = container;
    this.pageCollapse = new PageCollapse(this.container);
    this.pageChat = new PageChat(this.container);
  }

  init() {
    this.pageCollapse.init();
    this.pageChat.init();
    this.getHandler();
  }

  getHandler() {
    this.pageCollapse.collapseBtn.addEventListener('click', (event) => this.onCollapse(event));
    this.pageChat.openBtn.addEventListener('click', (event) => this.onChat(event));
  }

  onCollapse(event) {
    event.preventDefault();
    setTimeout(() => this.pageCollapse.collapseBtn.blur(), 300);

    if (this.pageCollapse.headerContainer.classList.contains('hidden')) {
      this.pageCollapse.headerContainer.classList.remove('hidden');
      this.pageCollapse.headerContainer.classList.add('active');
      setTimeout(() => this.pageCollapse.headerContainer.classList.remove('active'), 10);
    } else {
      this.pageCollapse.headerContainer.classList.add('active');
      setTimeout(() => {
        this.pageCollapse.headerContainer.classList.remove('active');
        this.pageCollapse.headerContainer.classList.add('hidden');
      }, 500);
    }
  }

  onChat(event) {
    event.preventDefault();

    if (!this.doubleСlick) {
      return;
    }

    this.doubleСlick = false;
    this.pageChat.openModal();
    Animate.animationOpacityReverse(this.pageChat.openBtn, 300);
    setTimeout(() => {
      this.pageChat.openBtn.classList.add('hidden');
      Animate.animationOpacity(this.pageChat.activeModal, 300);
      this.doubleСlick = true;
    }, 300);
  }
}
