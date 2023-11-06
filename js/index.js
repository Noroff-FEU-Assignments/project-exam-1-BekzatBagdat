// Homepage carousel (slider)
const scrollContainer = document.querySelector(".home-recent-container");
const backBtn = document.querySelector(".back-btn");
const forwardBtn = document.querySelector(".forward-btn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

forwardBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1100;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1100;
});
