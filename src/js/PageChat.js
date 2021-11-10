import Animate from './Animate';

export default class PagetChat {
  constructor(parentEl) {
    if (!parentEl) {
      throw Error('Элемент не найден');
    }
    this.parentEl = parentEl;
    this.doubleСlick = true;
    this.page = document.createElement('div');
  }

  init() {
    this.page.classList.add('chat');
    this.page.innerHTML = '<div class="chat-container">\n'
      + '                    <div class="chat-box">\n'
      + '                      <button class="open-btn"></button>\n'
      + '                    </div>\n'
      + '                    <div class="modal modal-chat hidden">\n'
      + '                      <div class="modal-title">Напишите нам</div>\n'
      + '                      <textarea name="text" cols="30" rows="10" class="input-textarea" required></textarea>\n'
      + '                      <div class="btn-box">\n'
      + '                        <button class="send-btn">Отправить</button>\n'
      + '                      </div>\n'
      + '                      <button class="close-btn">X</button>\n'
      + '                    </div>\n'
      + '                  </div>\n';

    this.parentEl.append(this.page);
    this.chatContainer = this.parentEl.querySelector('.chat-container');
    this.openBtn = this.parentEl.querySelector('.open-btn');
    this.activeModal = this.parentEl.querySelector('.modal-chat');
    this.inputTextarea = this.parentEl.querySelector('.input-textarea');
    this.sendbtn = this.parentEl.querySelector('.send-btn');
    this.closeBtn = this.parentEl.querySelector('.close-btn');
  }

  openModal(callback) {
    this.activeModal.classList.remove('hidden');
    this.closeBtn.addEventListener('click', (event) => this.closeModal(event));
    this.inputTextarea.addEventListener('submit', callback);
  }

  closeModal(event) {
    event.preventDefault();

    if (!this.doubleСlick) {
      return;
    }

    this.doubleСlick = false;
    Animate.animationOpacityReverse(this.activeModal, 300);
    this.inputTextarea.value = '';
    setTimeout(() => {
      this.activeModal.classList.add('hidden');
      this.openBtn.classList.remove('hidden');
      Animate.animationOpacity(this.openBtn, 300);
      this.doubleСlick = true;
    }, 300);
  }
}
