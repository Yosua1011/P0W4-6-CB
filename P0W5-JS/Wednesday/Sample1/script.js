// select input by id="main-form"
var mainForm = document.getElementById('main-form');
var childForm = mainForm.children[0];
var inputForm = childForm.getElementsByTagName('input')
console.log(inputForm);

mainForm.addEventListener('submit', function(event){
  for (var i = 0; i < inputForm.length; i++) {
    event.preventDefault();
    let labelInputForm = inputForm[i].getAttribute('label');
    let valueInputForm = inputForm[i].value
    console.log(inputForm[i].getAttribute('label'));

    // Check null input
    if (valueInputForm == "") {
      return alert(labelInputForm+' tidak boleh kosong!');
    }

    // Check password and email
    switch (labelInputForm) {
      case "password": { var password = valueInputForm;break;}
      case "konfirmasi password": { var konfirmasiPassword =  valueInputForm;break;}
      case "email": {var email = valueInputForm;break;}
      case "konfirmasi email": {var konfirmasiEmail = valueInputForm;break;}
      default: {break;}
    }
    if (password!=null && konfirmasiPassword!=null) {
      if (password !== konfirmasiPassword) {
        return alert('Password dan konfirmasi tidak sama');
      }
    }
    if (email!=null && konfirmasiEmail!=null) {
      if (email !== konfirmasiEmail) {
        return alert('Email dan konfirmasi tidak sama');
      }
    }
  }
})