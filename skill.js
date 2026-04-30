// nav
  const links = document.querySelectorAll(".main-nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
// linear louding skill 
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
};
