var body = document.getElementById('main');
// div id='main'
// var mainDiv = document.createElement('div');
// var mainDivAttrId = document.createAttribute('id');
// mainDivAttrId.value = "main";
// mainDiv.setAttributeNode(mainDivAttrId);
// body.appendChild(mainDiv);

// div id="content"
var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'content');
body.appendChild(mainDiv);

var classDiv = document.createElement('div');
classDiv.setAttribute('class', 'content-post');
mainDiv.appendChild(classDiv);
// Paragraph1
// h1
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post');
h1.appendChild(h1Text);
classDiv.appendChild(h1);

// span
var span = document.createElement('span');
var spanText = document.createTextNode('Published on 12 May 2016');
span.appendChild(spanText);
classDiv.appendChild(span);

var paragraph1 = document.createElement('p');
var paragraph1Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
paragraph1.appendChild(paragraph1Text);
classDiv.appendChild(paragraph1);

// button
var button = document.createElement('button');
var buttonText = document.createTextNode('Share this Post');
button.appendChild(buttonText);

// alert
button.addEventListener('click', function() {
  alert('You shared This Post');
});
classDiv.appendChild(button);

// Paragraph2
var classDiv = document.createElement('div');
classDiv.setAttribute('class', 'content-post');
mainDiv.appendChild(classDiv);
// Paragraph1
// h1
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post 2');
h1.appendChild(h1Text);
classDiv.appendChild(h1);

// span
var span = document.createElement('span');
var spanText = document.createTextNode('Published on 13 May 2016');
span.appendChild(spanText);
classDiv.appendChild(span);

var paragraph1 = document.createElement('p');
var paragraph1Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
paragraph1.appendChild(paragraph1Text);
classDiv.appendChild(paragraph1);

// button
var button = document.createElement('button');
var buttonText = document.createTextNode('Share this Post');
button.appendChild(buttonText);

// alert
button.addEventListener('click', function() {
  alert('You shared This Post');
});
classDiv.appendChild(button);
