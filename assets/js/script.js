// Cinematic section reveal on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 }); // section appears when 20% is visible

sections.forEach(section => {
  observer.observe(section);
});
