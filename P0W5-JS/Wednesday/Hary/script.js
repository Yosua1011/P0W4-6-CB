var mainForm = document.getElementById('main-form');

        mainForm.addEventListener('submit', function(event) {

        var nama = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confpassword = document.getElementById("confpassword").value;
        var email = document.getElementById("email").value;
        var confemail = document.getElementById("confemail").value;

        if(password !== confpassword || email!==confemail) {
            event.preventDefault();
            alert ('Password and Password Confirmation not similar!');
        } else if (email!==confemail) {
            alert ('Email and Email Confirmation not similar');
        }

        if (nama != "" && password!="" && confpassword !="" && email !="" && confemail !=""){
            alert('submit sukses!!');
        
        } else{
            event.preventDefault();
            alert('Tidak ada yang boleh kosong !!');
            
            }
        });