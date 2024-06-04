const scriptURL = "https://script.google.com/macros/s/AKfycbzMhf_56WokV6F4hbt0d_6awRp7RnGbIzFLOTuaEsMVicVk5jvk3vxjX8Jrnp3Aaq7Bog/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})