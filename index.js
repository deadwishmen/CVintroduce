
gsap.registerPlugin(ScrollTrigger);
gsap.to('.scrollprogress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});
