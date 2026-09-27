(() => {
  if (window.__ziyanaSharedModalBrandReady) return;
  window.__ziyanaSharedModalBrandReady = true;

  function addBrand(modal) {
    if (!modal || modal.hidden || modal.querySelector(':scope > .shared-modal-brand')) return;
    const row = document.createElement('div');
    row.className = 'shared-modal-brand';
    const image = document.createElement('img');
    image.className = 'brand-logo-img ' + (modal.id === 'adminModal' ? 'logo-on-dark' : 'logo-on-light');
    image.src = (modal.id === 'adminModal' ? 'ziyana-logo-dark.svg?v=20260927' : 'ziyana-logo-light.svg?v=20260927');
    image.alt = 'Ziyana Fashion';
    row.appendChild(image);
    modal.prepend(row);
  }

  function scan() {
    document.querySelectorAll('.modal:not([hidden])').forEach(addBrand);
  }

  const observer = new MutationObserver(scan);
  observer.observe(document.body, {
    childList:true,
    subtree:true,
    attributes:true,
    attributeFilter:['hidden']
  });

  const oldOpen = window.openModal;
  if (oldOpen) {
    window.openModal = function(id, ...args) {
      const result = oldOpen.call(this, id, ...args);
      requestAnimationFrame(scan);
      return result;
    };
  }
  scan();
})();
