const smoothScroll = (targetId) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

export default smoothScroll;
