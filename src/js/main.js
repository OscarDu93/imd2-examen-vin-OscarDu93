(function () {
  "use strict";

  const elements = document.querySelectorAll(".animate-on-scroll");

  const options = {
    threshold: 0.25,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
})();
