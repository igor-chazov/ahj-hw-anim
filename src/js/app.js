import PageController from './PageController';

const pageCtrl = new PageController();
pageCtrl.bindToDOM(document.querySelector('.page'));
pageCtrl.init();
