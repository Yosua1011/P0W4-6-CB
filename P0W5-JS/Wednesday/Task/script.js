var mainForm = document.getElementById('main-form');
var childForm = mainForm.children[0];
var inputForm = childForm.getElementsByTagName('input');

mainForm.addEventListener('submit', function(event){
	for (var i=0; i < inputForm.length; i++) {
		event.preventDefault();
		var labelInputForm = inputForm[i].getAttribute('label');
		var valueInputForm = inputForm[i].value;

		// Check Null Input
		if (valueInputForm == "") {
			return alert(labelInputForm+ ' tidak boleh kosong!');
		} else {
			// return window.location.href = "finish.html";
		}

		// Check Password Inputn and Email Input
		switch (labelInputForm) {
			case "password": {var password = valueInputForm;break;}
			case "password confirmation": {var passwordConf = valueInputForm;break;}
			case "email": {var email = valueInputForm;break;}
			case "email confirmation": {var emailConf = valueInputForm;break;}
			default: {break;}
		}

		if (password!=null && passwordConf!=null) {
			if (password!==passwordConf) {
				return alert('Password dan Konfirmasi Tidak Sama!')
			}
		} else {
			// return window.location.href = "finish.html";
		}

		if (email!=null && emailConf!=null) {
			if (email!==emailConf) {
				return alert('Email dan Konfirmasi Tidak Sama!')
			}
		} else {
			// return window.location.href = "finish.html";
		}
	}
})
// var mainForm = document.getElementById('main-form');
//     mainForm.addEventListener('submit', function(event) {
//         var nama = document.getElementById("username").value;
//         var password = document.getElementById("password").value;
//         var confpassword = document.getElementById("confpassword").value;
//         var email = document.getElementById("email").value;
//         var confemail = document.getElementById("confemail").value;

//         if(password !== confpassword || email!==confemail) {
//             alert ('Cek Kembali untuk Password & Email Harus Sama !');
//         }
//         else if (nama != "" && password!="" && confpassword !="" && email !="" && confemail !=""){
//             alert('submit sukses!!');
        
//         } else{
//             event.preventDefault();
//             alert('Tidak ada yang boleh kosong !!');
//             }
//     });

