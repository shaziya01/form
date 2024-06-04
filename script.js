const scriptURL = 'https://script.google.com/macros/s/AKfycbzk2PPYdZEshi_51hrDRx5nZ6hgbhOp9UREIM4m4_dApcEBbkIjbdLemRbDVUf0yP9w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})