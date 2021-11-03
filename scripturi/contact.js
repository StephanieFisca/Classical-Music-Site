//contact.js=>script javascript ce confera o mare parte din functionalitatea paginii de contact a site-ului

let displayButton = document.querySelector('.afisare');
var paragraph = document.querySelector('.paragraf');
var newHeight;

function IncreaseHeight() {
  let div = document.querySelector('.left-container');
  let height = div.offsetHeight;
  console.log(height);
  newHeight = height + 200;
  div.style.height = newHeight + 'px';
}

function DecreaseHeight() {
  let div = document.querySelector('.left-container');
  let height = div.offsetHeight;
  console.log(height);
  newHeight = newHeight - 200;
  div.style.height = newHeight + 'px';
}


function IncreaseTheOppacity(element) {
  let oppArray = ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"];
  let x = 0;
  (function next() {
    element.style.opacity = oppArray[x];
    if (x++ < oppArray.length) {
      setTimeout(next, 50);
    }
  })();
}

function DecreaseTheOppacity(element) {
  let opp2Array = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
  let y = 0;
  (function next() {
    element.style.opacity = opp2Array[y];
    if (y++ < opp2Array.length) {
      setTimeout(next, 50);
    }
  })();
}



function ToggleParagraph() {
  if (paragraph.classList.contains('invisible')) {
    paragraph.classList.add('visible');
    IncreaseTheOppacity(paragraph);
    paragraph.classList.remove('invisible');
    IncreaseHeight();
    return 0;
  }

  if (paragraph.classList.contains('visible')) {
    DecreaseTheOppacity(paragraph);
    paragraph.classList.add('invisible');
    paragraph.classList.remove('visible');
    DecreaseHeight();
    return 0;
  }

}


var resetButton = document.getElementById('reset');

function Reset() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('number').value = "12";
  document.getElementById('dropdown').selectedIndex = 0;
  let radiobuttons = document.getElementsByClassName('radio');
  for (let i = 0; i < radiobuttons.length; i++)
    radiobuttons[i].checked = false;

  let checkboxlists = document.getElementsByClassName('check');

  for (let i = 1; i < checkboxlists.length; i++)
    checkboxlists[i].checked = false;

  document.getElementById('story').value = "";



}

displayButton.addEventListener('click', ToggleParagraph);
resetButton.addEventListener('click', Reset);