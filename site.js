const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
}


// Same-page team profiles with full biographies and compact portraits.
document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('profile-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const content = document.getElementById('profile-dialog-content');
  const close = document.getElementById('profile-close');
  document.querySelectorAll('[data-profile-open]').forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      const card = trigger.closest('.team-card');
      const detail = card && card.querySelector('.profile-detail');
      if (!detail) return;
      content.innerHTML = detail.innerHTML;
      dialog.showModal();
    });
  });
  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', function () { content.replaceChildren(); });
});

// Compose email using the visitor's email app (static website, no server).
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('learninglab-contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem('name').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const message = form.elements.namedItem('message').value.trim();
    const subject = 'Learning Lab inquiry from ' + name;
    const body = 'Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message;
    window.location.href = 'mailto:learninglabfuturemaking@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
});
