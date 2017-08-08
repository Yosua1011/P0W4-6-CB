// seleksi tag body sebagai parent
var body = document.body;

// seleksi div berdasarkan ID  'main'
var divMain = document.getElementById('main');

// membuat <div id="content">
var divContent = document.createElement('div');
var divContentAttr= document.createAttribute('id');
divContentAttr.value = "content";
divContent.setAttributeNode(divContentAttr);
// eksekusi <div id="content"> sebagai child <div id="main">
divMain.appendChild(divContent)

//Check
console.log(divMain.children);

// Grab from database
var dataPost = [
  {
    judul: "Judul Post 1",
    date: "12 May 2016",
    text: "Lorem ipsum dolot sit amet ini hidup"
  },
  {
    judul: "judul Post 2: Duh banyak amat",
    date: "13 May 2016",
    text: "Lorem ipsum dolot sit amet ini hidup tanggal tua"
  }
]


for (var i = 0; i < dataPost.length; i++) {

  var divContentPost = document.createElement('div');
  var divContentPostAttr = document.createAttribute('class');
  divContentPostAttr.value = "content-post";
  divContentPost.setAttributeNode(divContentPostAttr);
  // eksekusi <div class="content-post" sebagai chaild <div id="content">
  divContent.appendChild(divContentPost);

  // membuat element h1
  var h1=document.createElement('h1');
  var h1Text=document.createTextNode(dataPost[i].judul)
  h1.appendChild(h1Text);

  // membuat element span
  var span=document.createElement('span');
  var spanText=document.createTextNode(dataPost[i].date);
  span.appendChild(spanText);

  // membuat element p
  var p=document.createElement('p');
  var pText=document.createTextNode(dataPost[i].text);
  p.appendChild(pText);

  // membuat button share
  var shareButton=document.createElement('button');
  var shareButtonAttr=document.createAttribute('class');
  shareButtonAttr.value="share-post-btn";
  shareButton.setAttributeNode(shareButtonAttr);
  var shareButtonText=document.createTextNode('Share this Post')
  shareButton.appendChild(shareButtonText)

  // eksekusi h1 span p buttonShare sebagai child <div class="content-post">
  divContentPost.appendChild(h1);
  divContentPost.appendChild(span);
  divContentPost.appendChild(p);
  divContentPost.appendChild(shareButton);

}