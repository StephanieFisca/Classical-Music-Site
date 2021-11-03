//compozitori.js-script ce confera o parte din functionalitatea paginii aferente compozitorilor (compozitori.html)

let music = document.querySelectorAll('.asculta');
var audio;
let stop = document.querySelectorAll('#opreste');
for (let i = 0; i < music.length; i++) {
  if (music[i].classList.contains('bach')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Bach_Allegro.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('mozart')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Mozart.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('beethoven')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/5th symphony.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('chopin')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Chopin.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('tchaikovsky')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Tchaikovsky.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('rachmaninov')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Sergei.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('vivaldi')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Vivaldi.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('schubert')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Schubert.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('brahms')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Brahms.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('haydn')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Haydn.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('liszt')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Liszt.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('prokofiev')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Prokofiev.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('handel')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Handel.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('shostacovich')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Shostakovich.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('schumann')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Schumann.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('debussy')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Debussy.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('verdi')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Verdi.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('saint-saens')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Saint-Saens.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('strauss')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Strauss.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }

  if (music[i].classList.contains('enescu')) {
    music[i].addEventListener('click', function () {
      audio = new Audio('music/Enescu.mp3');
      audio.play();
      stop[i].classList.add('on');
      stop[i].classList.remove('off');
      stop[i].addEventListener('click', function () {
        audio.pause();
        stop[i].classList.add('off');
        stop[i].classList.remove('on');
      })

    })
  }


}
