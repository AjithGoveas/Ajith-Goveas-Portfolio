const smoothScroll = (targetId, event = null) => {
  if (event) event.preventDefault(); // Prevent default anchor jump behavior

  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.scrollY; // Use modern `window.scrollY`
  const targetPosition = target.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo({ top: startPosition + distance * easedProgress });

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

export default smoothScroll;
