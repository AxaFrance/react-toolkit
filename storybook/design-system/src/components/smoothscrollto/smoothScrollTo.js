const noClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const ease = (t, b, c, d) => (c * t) / d + b;

class SmoothScrollTo {
  constructor(selector) {
    this.smoothLinks = document.querySelectorAll(`.${selector}`);
    this.delay = 1000;
    this.offset = 80;
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initEvents();
  }

  initEvents = () => {
    [].forEach.call(this.smoothLinks, smoothLink => smoothLink.addEventListener('click', e => this.smoothScroll(e), true));
  };

  isNotExitingElement() {
    return !this.smoothLinks;
  }

  smoothScroll(e) {
    const duration = this.delay;
    noClick(e);
    const id = e.currentTarget.getAttribute('data-target');
    const smoothTarget = document.getElementById(id);
    const targetPosition = smoothTarget.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 113;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const runAnimation = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, runAnimation);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }
}

export default SmoothScrollTo;
