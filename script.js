document.addEventListener('DOMContentLoaded', () => {

  setActiveNav();
  initBuyButtons();

  function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
      if (link.getAttribute('href') === page) {
        link.classList.add('active-nav');
      }
    });
  }

  function initBuyButtons() {
    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        const name = card ? card.querySelector('h3').textContent : 'Product';
        const originalText = btn.textContent;
        btn.textContent = '✓ Added!';
        btn.style.background = '#2e7d32';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 1500);
      });
    });
  }

});
