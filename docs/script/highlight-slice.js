document.addEventListener("DOMContentLoaded", () => {
  const chart = document.querySelector(".pizza-chart");
  const labels = document.querySelectorAll(".label");

  // Gradiente original
  const originalGradient = `
    conic-gradient(
      #4CAF50 0% 15%, 
      #E53935 15.2% 35%, 
      #1E88E5 35.2% 45%, 
      #00ACC1 45.2% 60%, 
      #FFB300 60.2% 77%, 
      #9C27B0 77.2% 100%
    )`;

  const highlightGradients = {
    node: `conic-gradient(
      #4CAF50 0% 15%, 
      #ccc 15.2% 100%
    )`,
    laravel: `conic-gradient(
      #ccc 0% 15%, 
      #E53935 15.2% 35%, 
      #ccc 35.2% 100%
    )`,
    git: `conic-gradient(
      #ccc 0% 35%, 
      #1E88E5 35.2% 45%, 
      #ccc 45.2% 100%
    )`,
    htmlcss: `conic-gradient(
      #ccc 0% 45%, 
      #00ACC1 45.2% 60%, 
      #ccc 60.2% 100%
    )`,
    js: `conic-gradient(
      #ccc 0% 60%, 
      #FFB300 60.2% 77%, 
      #ccc 77.2% 100%
    )`,
    php: `conic-gradient(
      #ccc 0% 77%, 
      #9C27B0 77.2% 100%
    )`
  };

  labels.forEach(label => {
    label.addEventListener("mouseenter", () => {
        const slice = label.getAttribute("data-slice");
        chart.style.setProperty("--highlight-gradient", highlightGradients[slice]);
        chart.classList.add("active");
    });

    label.addEventListener("mouseleave", () => {
        chart.classList.remove("active");
    });
  });
});