//istoric.js=>script de tip javascript ce confera o mare parte din functionalitatea paginii istoric.html, ce surprinde evolutia muzicii clasice.

var icons = document.querySelectorAll('.drop');
var newHeight;
var picture = document.querySelectorAll('.poza');
console.log(picture);
var paragraphs = document.querySelectorAll('.paragraph');

var div1 = document.getElementById('medieval');
var div2 = document.getElementById('renascentist');
var div3 = document.getElementById('baroc');
var div4 = document.getElementById('clas');
var div5 = document.getElementById('romantism');
var div6 = document.getElementById('modernism');
var div7 = document.getElementById('postmodernism');
var div8 = document.getElementById('douazeci');
var div9 = document.getElementById('douazeciunu');
var div1height = div1.offsetHeight;
var div2height = div2.offsetHeight;
var div3height = div3.offsetHeight;
var div4height = div4.offsetHeight;
var div5height = div5.offsetHeight;
var div6Height = div6.offsetHeight;
var div7Height = div7.offsetHeight;
var div8Height = div8.offsetHeight;
var div9Height = div9.offsetHeight;



function IncreaseTheOppacity(element) {
  let oppArray = ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"];
  let x = 0;
  (function next() {
    element.style.opacity = oppArray[x];
    if (x++ < oppArray.length) {
      setTimeout(next, 60);
    }
  })();
}

function DecreaseTheOppacity(element) {
  let opp2Array = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
  let y = 0;
  (function next() {
    element.style.opacity = opp2Array[y];
    if (y++ < opp2Array.length) {
      setTimeout(next, 60);
    }
  })();
}






for (let i = 0; i < icons.length; i++) {
  if (icons[i].classList.contains('medieval') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');

        let height = div1.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div1.style.height = newHeight + 'px';

      }
      else {
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div1.style.height = div1height + 'px';
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
      }
    })
  }

  if (icons[i].classList.contains('renascentist') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div2.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div2.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div2.style.height = div2height + 'px';

      }
    })
  }

  if (icons[i].classList.contains('baroc') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div3.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div3.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div3.style.height = div3height + 'px';

      }
    })
  }

  if (icons[i].classList.contains('clasicism') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div4.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div4.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div4.style.height = div4height + 'px';

      }
    })
  }


  if (icons[i].classList.contains('romantism') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div5.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div5.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div5.style.height = div5height + 'px';

      }
    })
  }


  if (icons[i].classList.contains('modernism') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div6.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div6.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div6.style.height = div6Height + 'px';

      }
    })
  }

  if (icons[i].classList.contains('postmodernism') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div7.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div7.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div7.style.height = div7Height + 'px';

      }
    })
  }

  if (icons[i].classList.contains('douazeci') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div8.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div8.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div8.style.height = div8Height + 'px';

      }
    })
  }

  if (icons[i].classList.contains('douazeciunu') && icons[i].classList.contains('closed')) {
    icons[i].classList.add('opened');
    icons[i].classList.remove('closed');
    icons[i].addEventListener('click', function () {
      if (picture[i].classList.contains('hide') && paragraphs[i].classList.contains('invisible')) {
        picture[i].classList.add('show');
        picture[i].classList.remove('hide');
        paragraphs[i].classList.add('visible');
        paragraphs[i].classList.remove('invisible');
        let height = div9.offsetHeight;
        newHeight = height + 400;
        IncreaseTheOppacity(paragraphs[i]);
        IncreaseTheOppacity(picture[i]);
        div9.style.height = newHeight + 'px';

      }
      else {
        DecreaseTheOppacity(paragraphs[i]);
        DecreaseTheOppacity(picture[i]);
        picture[i].classList.add('hide');
        picture[i].classList.remove('show');
        paragraphs[i].classList.add('invisible');
        paragraphs[i].classList.remove('visible');
        div9.style.height = div9Height + 'px';

      }
    })
  }


}


