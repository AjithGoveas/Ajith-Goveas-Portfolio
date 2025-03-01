const smoothScroll = (targetId, event = null) => {
  if (event) event.preventDefault(); // Prevent default anchor behavior

  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.scrollY || document.documentElement.scrollTop;
  const targetPosition = target.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  // Easing function for smooth transition
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo({
      top: startPosition + distance * easedProgress,
      behavior: "auto",
    });

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo({ top: targetPosition, behavior: "auto" });
    }
  };

  requestAnimationFrame(animation);
};

export default smoothScroll;
