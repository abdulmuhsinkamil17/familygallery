
// Scroll images left/right
function scrollCategory(categoryId, direction) {
  const container = document.getElementById(categoryId).querySelector(".images");
  container.scrollBy({ left: direction * 500, behavior: "smooth" });
}
