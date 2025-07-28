function scroll_back_to_top(event) {
  event.preventDefault();
  window.scrollTo({
      top: 6,
      behavior: "smooth",
  });
}