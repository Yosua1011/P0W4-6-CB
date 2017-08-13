// Library

/**
<div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
**/
var div1 = document.getElementById('eldest-parent');
var anak1Div1 = div1.children[0];
anak1Div1.innerHTML = 'Diakses Melalui eldest parent';

/**
<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
**/
var anak2Div1 = anak1Div1.nextElementSibling;
var grandchild2div = document.getElementById('a-child');
var grandchild1div = grandchild2div.previousElementSibling;
var grandchild3div = anak2Div1.children[0].children[2];
grandchild1div.innerHTML = 'Diakses Melalui a Child';
grandchild3div.innerHTML = 'Diakses Melalui a Child';

/**
<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
**/
var grandchild2div = document.getElementById('a-child');
var bapaknyasiapa = grandchild2div.parentNode;
var bapaknyasiapa2 = bapaknyasiapa.parentNode;
var saudarabapaknya = bapaknyasiapa2.nextElementSibling;
saudarabapaknya.innerHTML = 'Diakses Melalui a Child';