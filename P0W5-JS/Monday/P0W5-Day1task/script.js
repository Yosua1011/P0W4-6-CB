/**
<h1 id="fill-me"></h1> menjadi <h1 id="fill-me">HALO!</h1>
<p className="change-all-of-me"></p> menjadi 
<p className="change-all-of-me">HALO JUGA!</p>
<h2>Change the Inside of H2!</h2> menjadi <h2>Apa Kabar!</h2>
**/

// Mendeteksi DOM berdasarkan ID
 var fillMe = document.getElementById("fill-me");
 fillMe.innerHTML = "Halo!";

// Mendeteksi DOM berdasarkan Class
var changeAllOfMe = document.getElementsByClassName("change-all-of-me");
for (var i = 0; i < changeAllOfMe.length; i++) {
changeAllOfMe[i].innerHTML = "HALO JUGA!";
}

//Mendeteksi DOM berdasarkan Tag
var headContent = document.getElementsByTagName("h2");
headContent[0].innerHTML = "Apa Kabar!"