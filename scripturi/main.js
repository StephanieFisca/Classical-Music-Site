//main.js=>fisier javascript auxiliar ce va fi importat de toate din cele 5 pagini create.
//A fost folosit in principal pentru asigurarea functionalitatii paginii de start, dar si pentru colorarea diferita a contextului din navigatie, in functie de pagina pe care utilizatorul se afla.

let source = window.location.pathname;
console.log(source);
let file = source.split("/").pop();
console.log(file);

let acasa = document.querySelector('.acasa');
let compozitori = document.querySelector('.compozitori');
let contact = document.querySelector('.contact');
let istoric = document.querySelector('.istoric');
let slagare = document.querySelector('.slagare');


switch (file) {
  case ('index.html'):
    acasa.style.color = '#9B2915';
    acasa.style.textDecoration = 'underline';
    break;

  case ('compozitori.html'):
    compozitori.style.color = '#9B2915';
    compozitori.style.textDecoration = 'underline';
    break;

  case ('contact.html'):
    contact.style.color = '#9B2915';
    contact.style.textDecoration = 'underline';
    break;
  case ('istoric.html'):
    istoric.style.color = '#9B2915';
    istoric.style.textDecoration = 'underline';
    break;

  case ('slagare.html'):
    slagare.style.color = '#9B2915';
    slagare.style.textDecoration = 'underline';
    break;
}


if (file === 'index.html') {
  var mail = document.querySelector('.mail');

  function Alert() {

    alert('Veți fi redirecționat către aplicația dummeavoastră implicită de email.');
  }


  function IncreaseTheOppacity(element) {
    let oppArray = ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"];
    let x = 0;
    (function next() {
      element.style.opacity = oppArray[x];
      if (x++ < oppArray.length) {
        setTimeout(next, 20);
      }
    })();
  }

  function DecreaseTheOppacity(element) {
    let opp2Array = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    let y = 0;
    (function next() {
      element.style.opacity = opp2Array[y];
      if (y++ < opp2Array.length) {
        setTimeout(next, 20);
      }
    })();
  }




  var link = document.querySelector('#link');
  var iframe = document.querySelector('.iframe');

  var newHeight;
  var info3 = document.querySelector('#info3');
  var info3InitialHeight = info3.offsetHeight;

  function IncreaseHeight() {
    console.log(main);
    let height = info3.offsetHeight;
    console.log(height);
    newHeight = height + 400;
    info3.style.height = newHeight + 'px';
  }

  function DecreaseHeight() {
    let height = info3.offsetHeight;
    console.log(height);
    info3.style.height = info3InitialHeight + 'px';
  }




  function ToggleIframe() {
    if (iframe.classList.contains('hidden')) {
      iframe.classList.add('shown');
      IncreaseTheOppacity(iframe);
      iframe.classList.remove('hidden');
      IncreaseHeight();
      return 0;
    }

    if (iframe.classList.contains('shown')) {
      iframe.classList.add('hidden');
      DecreaseTheOppacity(iframe);
      iframe.classList.remove('shown');
      DecreaseHeight();
      return 0;

    }
  }


  mail.addEventListener('click', Alert);
  link.addEventListener('click', ToggleIframe);
}