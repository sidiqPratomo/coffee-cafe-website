const animateOnScroll = document.querySelector('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.add('slide-up');
      entry.target.classList.add('zoom-in');
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(animateOnScroll);