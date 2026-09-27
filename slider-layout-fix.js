(() => {
  function moveNewArrivalsOutOfSlide() {
    const section = document.getElementById('newArrivals');
    const slider = document.getElementById('promoMasterSlider');
    const main = slider?.closest('main');

    if (section && slider && main && slider.contains(section)) {
      main.insertBefore(section, slider);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', moveNewArrivalsOutOfSlide, {once:true});
  } else {
    moveNewArrivalsOutOfSlide();
  }
})();
