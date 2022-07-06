import { gsap } from 'gsap';

export function animateNavBar () {
  gsap.timeline()
    .from('.menuItem', {
      yPercent: -100,
      opacity: 0,
      stagger: 0.1,
      ease: 'back(8)',
      duration: 0.5,
      delay: 0.5
    })
    .from('.site-logo', {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: 'back(8)',
      transformOrigin: 'center'
    }, 1)
    .from('.header-right', {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: 'back(8)',
      transformOrigin: 'center'
    }, 1)
}

export function animateExperiences () {
  gsap.timeline()
    .from('.wpo-work-item', {
      xPercent: -100,
      opacity: 0,
      stagger: 0.2,
      ease: 'back(1)',
      duration: 5.5,
      scrollTrigger: {
        trigger: '.wpo-work-wrap',
      }
    })
}