let currentPage = 1;
const totalPages = 5;

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);
  current.classList.remove("active");

  currentPage++;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const next = document.getElementById(`page${currentPage}`);
  next.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
