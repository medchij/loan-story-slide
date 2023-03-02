
class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 15000);
  }
  pauseSlide() {
    clearTimeout(this.timeout);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}
new SlideStories('slide');

var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');
function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
// var play = document.querySelector('.play');
// var pause = document.querySelector('.pause');
// var animation1 = document.querySelector('.slide-thumb > span.active')

// play.addEventListener('click', function () {
//     this.style.display = 'none';
//     pause.style.display = 'block';
//     // animation1.style.animationPlayState = 'paused';
//     // animation1.style.animationPlayState = 'running';
//     console.log(animation1)
// });
// pause.addEventListener('click', function () {
//     this.style.display = 'none';
//     play.style.display = 'block';
//     // animation1.style.animationPlayState = 'running';
//     // animation1.style.animationPlayState = 'paused';
//     console.log(animation1)
// });
