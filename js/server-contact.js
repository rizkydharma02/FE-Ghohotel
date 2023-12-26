const contactForm = document.getElementById('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  fetch('https://be-2-surabaya-12-production-92ce.up.railway.app/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contact_fullname: fullName,
      contact_email: email,
      contact_phone: phone,
      contact_message: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Succesfully Submit Form');
        location.reload(true);
      } else {
        alert('Failed to Submit Form');
      }
    })
    .catch((error) => {
      alert('Something When Wrong to Submit!', error);
    });
});
