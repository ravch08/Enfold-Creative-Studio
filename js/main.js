'use strict';

const header = document.querySelector('header');
const scrollTop = document.querySelector('.scrollTop');
const bannerSection = document.querySelector('.banner');

const fadeIns = document.querySelectorAll('.fade-in');

const options = {
   threshold: 1
};

const appearOptions = {
   threshold: 0.7,
   rootMargin: "-100px 0px -100px 0px"
};

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? header.classList.add('sticky') : header.classList.remove('sticky');
   });
}, options);

const scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      !entry.isIntersecting ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
   });
}, options);

const appearObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return
      else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      };
   });
}, appearOptions);

headerObserver.observe(bannerSection);
scrollObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
   appearObserver.observe(fadeIn);
});


scrollTop.addEventListener('click', () => {

   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});
