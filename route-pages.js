(() => {
  if (window.__ziyanaRoutesInstalled) return;
  window.__ziyanaRoutesInstalled = true;

  const prefix = '#/page/';
  const storageKey = 'ziyana-page-snapshots-v1';
  const oldOpen = window.openModal;
  const oldClose = window.closeModal;
  let route = '';
  let restoring = false;

  const currentModal = () => document.querySelector('.modal:not([hidden])');
  const getSnapshots = () => {
    try { return JSON.parse(sessionStorage.getItem(storageKey) || '{}'); }
    catch { return {}; }
  };
  const getRoute = () => location.hash.startsWith(prefix)
    ? decodeURIComponent(location.hash.slice(prefix.length)) : '';

  function savePage() {
    if (!route) return;
    const modal = currentModal();
    if (!modal) return;
    const fields = [...modal.querySelectorAll('input,textarea,select')].map(el => ({
      value: el.type === 'file' ? '' : el.value,
      checked: !!el.checked
    }));
    const pages = getSnapshots();
    pages[route] = {id: modal.id, html: modal.innerHTML, fields};
    sessionStorage.setItem(storageKey, JSON.stringify(pages));
  }

  function slug(value) {
    return String(value || 'page').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  }

  function routeFor(id) {
    const modal = document.getElementById(id);
    if (!modal) return 'view/' + id;

    if (id === 'adminModal') return 'admin';
    if (id === 'authModal') {
      if (modal.querySelector('.customer-dashboard')) return 'account';
      return modal.querySelector('[name="authMode"]')?.value === 'register'
        ? 'account/register' : 'account/login';
    }
    if (id === 'checkoutModal') return 'checkout';
    if (id === 'productModal') {
      const title = modal.querySelector('#modalContent h2')?.textContent || 'product';
      let items = [];
      try { items = JSON.parse(localStorage.getItem('laiba_products') || '[]'); } catch {}
      const item = items.find(product => product.name === title);
      return item ? `product/${item.id}-${slug(title)}` : `product/${slug(title)}`;
    }
    if (id === 'campaignViewModal') {
      const title = modal.querySelector('#campaignViewContent h2')?.textContent || 'campaign';
      let gifts = [], ads = [];
      try { gifts = JSON.parse(localStorage.getItem('laiba_gifts') || '[]'); } catch {}
      try { ads = JSON.parse(localStorage.getItem('laiba_ads') || '[]'); } catch {}
      const gift = gifts.find(item => item.title === title);
      const ad = ads.find(item => item.title === title);
      return gift ? `gift/${gift.id}-${slug(title)}`
        : ad ? `campaign/${ad.id}-${slug(title)}` : `campaign/${slug(title)}`;
    }
    if (id === 'ordersModal') {
      const form = modal.querySelector('form');
      const hidden = form?.querySelector('input[type="hidden"]')?.value || '';
      if (form?.id && /EditForm|trackingForm/.test(form.id)) {
        return `admin/edit/${form.id}/${hidden}`;
      }
      return modal.querySelector('#publicTrackInput') ? 'order-tracking' : 'orders';
    }
    if (id === 'infoModal') return 'help';
    return 'view/' + id;
  }

  function pageMode(on) {
    document.body.classList.toggle('ziyana-route-active', on);
    const overlay = document.getElementById('overlay');
    if (overlay) overlay.hidden = true;
  }

  function go(next) {
    if (!next) return;
    route = next;
    history.pushState({ziyanaPage:true}, '', prefix + encodeURIComponent(next));
    pageMode(true);
  }

  function openFreshPage(next) {
    const parts = next.split('/');
    if (next === 'admin' || next.startsWith('admin/section/')) {
      window.renderAdmin?.();
      if (next.startsWith('admin/section/')) {
        setTimeout(() => {
          const wanted = parts.slice(2).join('/');
          const tile = [...document.querySelectorAll('.admin-dashboard-tile')]
            .find(el => slug(el.querySelector('h3')?.textContent || el.id) === wanted);
          tile?.classList.remove('is-collapsed');
        }, 220);
      }
      return;
    }
    if (next === 'account/login') return window.openAuth?.('login');
    if (next === 'account/register') return window.openAuth?.('register');
    if (next === 'account/orders') return window.openOrders?.();
    if (next === 'order-tracking') return window.renderOrderTracker?.();
    if (next === 'checkout') return window.openCheckout?.();

    if (parts[0] === 'product') {
      let items = [];
      try { items = JSON.parse(localStorage.getItem('laiba_products') || '[]'); } catch {}
      const id = decodeURIComponent(parts[1] || '').split('-')[0];
      const item = items.find(product => String(product.id) === id);
      if (item) return window.openProductDetails?.(item);
    }
    if (parts[0] === 'gift') {
      return window.showGiftDetails?.(decodeURIComponent(parts[1] || '').split('-')[0]);
    }
    if (parts[0] === 'campaign') {
      return window.showAdDetails?.(decodeURIComponent(parts[1] || '').split('-')[0]);
    }
    location.hash = '';
  }

  function show(next) {
    if (next === route) return;
    route = next;
    if (!next) {
      pageMode(false);
      document.querySelectorAll('.modal').forEach(modal => { modal.hidden = true; });
      return;
    }

    const saved = getSnapshots()[next];
    if (saved && document.getElementById(saved.id)) {
      const modal = document.getElementById(saved.id);
      modal.innerHTML = saved.html;
      [...modal.querySelectorAll('input,textarea,select')].forEach((el, i) => {
        const field = saved.fields?.[i];
        if (!field || el.type === 'file') return;
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = field.checked;
        else el.value = field.value;
      });
      restoring = true;
      oldOpen?.(saved.id);
      restoring = false;
      pageMode(true);
      return;
    }

    restoring = true;
    openFreshPage(next);
    restoring = false;
    pageMode(true);
  }

  window.openModal = function(id) {
    if (!restoring && route) savePage();
    const result = oldOpen?.(id);
    if (restoring) pageMode(true);
    else { pageMode(true); go(routeFor(id)); }
    return result;
  };

  window.closeModal = function(id) {
    if (route) {
      const parent = route.startsWith('admin/')
        ? 'admin'
        : route === 'orders'
          ? (currentUser?.role === 'admin' ? 'admin' : 'account')
          : '';
      route = '__closing__';
      history.replaceState({ziyanaPage:true}, '',
        parent ? prefix + encodeURIComponent(parent) : location.pathname + location.search);
      show(parent);
      return;
    }
    return oldClose?.(id);
  };

  document.addEventListener('click', event => {
    const card = event.target.closest('[data-account-filter]');
    if (!card) return;
    const now = Date.now();
    if (now - Number(card.dataset.routeClickAt || 0) < 400) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    card.dataset.routeClickAt = String(now);
  }, true);

  document.addEventListener('input', savePage, true);
  document.addEventListener('change', savePage, true);
  window.addEventListener('pagehide', savePage);
  window.addEventListener('popstate', () => show(getRoute()));

  // Open admin cards inside the admin page and give each section its own URL.
  document.addEventListener('click', event => {
    const tile = event.target.closest('.admin-dashboard-tile');
    if (!tile || event.target.closest('button,input,textarea,select,label,a,form,[data-admin-toggle]')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const now = Date.now();
    if (now - Number(tile.dataset.routeToggleAt || 0) < 400) return;
    tile.dataset.routeToggleAt = String(now);

    const name = slug(tile.querySelector('h3')?.textContent || tile.id);
    const opening = tile.classList.contains('is-collapsed');
    if (opening) {
      savePage();
      tile.classList.remove('is-collapsed');
      route = 'admin/section/' + name;
      history.pushState({ziyanaPage:true}, '', prefix + encodeURIComponent(route));
      pageMode(true);
      setTimeout(savePage, 0);
    } else {
      tile.classList.add('is-collapsed');
      route = 'admin';
      history.replaceState({ziyanaPage:true}, '', prefix + 'admin');
      pageMode(true);
      savePage();
    }
  }, true);

  const initial = getRoute();
  if (initial) {
    history.replaceState({}, '', location.pathname + location.search);
    history.pushState({ziyanaPage:true}, '', prefix + encodeURIComponent(initial));
    route = '';
    show(initial);
  }
})();
