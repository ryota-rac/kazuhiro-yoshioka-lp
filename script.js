document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('heroContent');
  if (!content) return;

  window.setTimeout(() => {
    content.classList.add('reveal');
  }, 100);
});
